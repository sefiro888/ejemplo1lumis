const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('./.qa/node_modules/jsdom');
const cssTree = require('./.qa/node_modules/css-tree');
const { services } = require('./content-v5.cjs');

const files = ['index.html', ...services.map(service => `${service.slug}.html`)];
const errors = [];
let refs = 0;
let images = 0;
let comparisons = 0;

for (const file of files) {
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'));
  const doc = dom.window.document;
  const heading = doc.querySelectorAll('h1');
  if (heading.length !== 1) errors.push(`${file}: expected one h1`);
  if (!doc.querySelector('meta[name="description"]')) errors.push(`${file}: missing description`);
  if (!doc.querySelector('link[rel="canonical"]')) errors.push(`${file}: missing canonical`);
  if (!doc.querySelector('nav[aria-label="Navegación principal"]')) errors.push(`${file}: missing navigation`);
  if (!doc.querySelector('footer')) errors.push(`${file}: missing footer`);
  if (doc.body.textContent.trim().split(/\s+/).length < 200) errors.push(`${file}: unexpectedly little content`);
  comparisons += doc.querySelectorAll('.compare').length;
  for (const element of doc.querySelectorAll('[src],[href],[srcset]')) {
    const value = element.getAttribute('src') || element.getAttribute('href') || '';
    if (!/^https?:/.test(value) && (value.startsWith('assets/') || value.endsWith('.html') || value.startsWith('index.html#'))) {
      const local = value.split(/[?#]/)[0];
      if (!fs.existsSync(local)) errors.push(`${file}: missing ${local}`);
      refs++;
    }
    const srcset = element.getAttribute('srcset');
    if (srcset) for (const candidate of srcset.split(',')) {
      const local = candidate.trim().split(/\s+/)[0];
      if (!fs.existsSync(local)) errors.push(`${file}: missing ${local}`);
      refs++;
    }
  }
  for (const image of doc.querySelectorAll('img')) {
    images++;
    if (!image.hasAttribute('alt')) errors.push(`${file}: image without alt`);
  }
  for (const anchor of doc.querySelectorAll('a[href^="#"]')) {
    if (!doc.getElementById(anchor.getAttribute('href').slice(1))) errors.push(`${file}: broken fragment ${anchor.getAttribute('href')}`);
  }
  if (file !== 'index.html') {
    const service = services.find(entry => `${entry.slug}.html` === file);
    if (heading[0]?.textContent !== service.name) errors.push(`${file}: wrong h1`);
    if (doc.querySelectorAll('.faq-list details').length < 3) errors.push(`${file}: incomplete FAQ`);
    if (doc.querySelectorAll('.context-cards article').length !== 3) errors.push(`${file}: incomplete contexts`);
    if (doc.querySelectorAll('.inquiry-copy li').length !== 3) errors.push(`${file}: incomplete inquiry guide`);
  }
  dom.window.close();
}

const css = fs.readFileSync('assets/css/site.css', 'utf8');
cssTree.parse(css, { onParseError(error) { errors.push(`CSS: ${error.message}`); } });
new Function(fs.readFileSync('assets/js/site.js', 'utf8'));
if (comparisons !== 7) errors.push(`Expected 7 comparisons, found ${comparisons}`);

const dom = new JSDOM(fs.readFileSync('index.html', 'utf8'), { url: 'https://example.test/index.html', runScripts: 'outside-only' });
const win = dom.window;
win.matchMedia = () => ({ matches:false, addEventListener(){} });
win.eval(fs.readFileSync('assets/js/site.js', 'utf8'));
const menu = win.document.querySelector('.menu-button');
menu.click();
if (menu.getAttribute('aria-expanded') !== 'true' || !win.document.querySelector('.main-nav').classList.contains('open')) errors.push('Mobile menu did not open');
menu.click();
if (menu.getAttribute('aria-expanded') !== 'false') errors.push('Mobile menu did not close');
const search = win.document.getElementById('service-search');
search.value = 'cristales'; search.dispatchEvent(new win.Event('input', { bubbles:true }));
if (win.document.querySelectorAll('.service-row:not([hidden])').length !== 1) errors.push('Search did not filter services');
const zone = win.document.getElementById('form-zone');
zone.value = 'Delicias'; zone.dispatchEvent(new win.Event('input', { bubbles:true }));
if (!decodeURIComponent(win.document.getElementById('form-wa').href).includes('Delicias')) errors.push('Contact message did not update');
const range = win.document.querySelector('.compare input');
range.value = '73'; range.dispatchEvent(new win.Event('input', { bubbles:true }));
if (range.closest('.compare').style.getPropertyValue('--split') !== '73%') errors.push('Comparison control did not update');
dom.window.close();

const report = { pages:files.length, references:refs, images, comparisons, css:'parsed', interactions:'menu, search, consultation and comparison passed', errors };
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exit(1);
