const fs = require('node:fs');
const { JSDOM } = require('./.qa/node_modules/jsdom');

const arrow = '<svg viewBox="0 0 24 24" class="icon" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const briefs = {
  'cristales': ['La luz cambia cuando los cristales están cuidados.', 'Ventanas de casa, ventanales de un negocio o superficies acristaladas que necesitan atención.', 'Cuéntanos cuántos cristales son, dónde están y si puedes enviarnos fotografías.'],
  'toldos': ['Un exterior que vuelve a dar gusto mirar.', 'Un toldo visible desde la calle o desde tu propia terraza merece una consulta adaptada a su estado.', 'Indica ubicación, tamaño aproximado y añade una foto del toldo.'],
  'garajes': ['La buena impresión empieza al llegar.', 'Un garaje es parte del espacio que usas cada día, aunque a menudo quede fuera de la conversación.', 'Cuéntanos si es de una comunidad o un negocio y cuáles son las zonas prioritarias.'],
  'terrazas': ['Que apetezca salir otra vez.', 'La terraza puede volver a ser ese lugar donde desayunar, reunirse o simplemente tomar el aire.', 'Describe el suelo, los elementos que hay y el tamaño aproximado del espacio.'],
  'pisos-viviendas': ['Tu casa, a gusto de nuevo.', 'Cada vivienda tiene un ritmo distinto. La consulta empieza por lo que tú necesitas cuidar.', 'Indica tamaño aproximado, estancias y prioridades; unas fotos pueden ayudar.'],
  'limpieza-general': ['Una puesta a punto que se nota.', 'Cuando varias zonas piden atención, ayuda empezar por una visión completa del espacio.', 'Cuéntanos qué estancias son prioritarias y qué resultado esperas de la consulta.'],
  'interiores': ['Mirar el espacio en conjunto.', 'Un interior tiene muchas superficies y usos. Cuéntanos dónde necesitas poner el foco.', 'Comparte tipo de espacio, dimensiones y fotografías de las zonas principales.'],
  'desinfeccion-interiores': ['Primero, entendamos tu espacio.', 'Si quieres consultar una necesidad de desinfección, podemos empezar por el contexto y el uso del lugar.', 'Explica qué tipo de interior es y cuál es la necesidad que te preocupa.'],
  'oficinas': ['Un lugar que acompaña la jornada.', 'Las oficinas necesitan una conversación que tenga en cuenta puestos, zonas comunes y uso diario.', 'Indica distribución, tamaño aproximado y las áreas que más te interesan.'],
  'gimnasios': ['Espacios con ganas de moverse.', 'En un gimnasio conviven distintas zonas. Una descripción clara ayuda a orientar la consulta.', 'Cuéntanos qué salas hay, cómo se usan y qué áreas quieres priorizar.'],
  'comunidades': ['Lo compartido también merece cuidado.', 'Portales, rellanos y espacios comunes forman parte de la primera impresión de cada vecino.', 'Indica el tipo de comunidad, las zonas comunes y su tamaño aproximado.'],
  'naves': ['Atención a cada zona de trabajo.', 'En una nave importa comprender el espacio antes de hablar del alcance del servicio.', 'Describe áreas, dimensiones y condiciones de acceso; una foto ayuda a situarnos.'],
  'pulido-suelos': ['Otra mirada al suelo.', 'Cada suelo es diferente. Su material y estado son el punto de partida de la conversación.', 'Indica material, superficie aproximada y comparte fotografías con buena luz.'],
  'abrillantado-suelos': ['Más luz bajo tus pies.', 'Si estás pensando en el acabado de un suelo, conviene empezar por saber de qué material se trata.', 'Cuéntanos material, tamaño y estado actual; puedes adjuntar fotos.'],
  'tapicerias': ['Cada tejido cuenta una historia.', 'Si necesitas consultar el cuidado de una tapicería, empecemos por conocer la pieza.', 'Indica qué elemento es, su tejido si lo conoces y comparte una fotografía.'],
  'sofas': ['Tu rincón favorito también cuenta.', 'Un sofá puede tener materiales y necesidades diferentes. La consulta empieza por describirlo.', 'Cuéntanos tamaño, material si lo sabes y envía una fotografía.']
};

for (const file of fs.readdirSync('.').filter(name => name.endsWith('.html'))) {
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'));
  const d = dom.window.document;
  const old = d.querySelector('[data-art-direction]');
  if (old) old.remove();
  d.querySelectorAll('.lumis-rail,.service-bridge').forEach(element => element.remove());
  const style = d.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'assets/css/art-direction.css?v=1';
  style.dataset.artDirection = 'style';
  d.head.append(style);

  const nav = d.querySelector('#site-nav');
  if (nav && !nav.querySelector('.nav-intro')) {
    nav.insertAdjacentHTML('afterbegin', '<div class="nav-intro"><span>HOLA, SOMOS LUMIS</span><strong>Tu espacio merece<br><em>un poco de luz.</em></strong><p>Limpiezas en Zaragoza · Cuéntanos qué necesitas.</p></div>');
  }
  const navCta = d.querySelector('.nav-cta');
  if (navCta && navCta.getAttribute('href')?.startsWith('#')) {
    navCta.removeAttribute('target');
    navCta.removeAttribute('rel');
  }

  if (file === 'index.html') {
    const hero = d.querySelector('.living-hero');
    hero.querySelector('h1').innerHTML = '<span class="hero-lead">Entrar y pensar:</span><em>qué gusto.</em>';
    hero.querySelector('.hero-content > p').innerHTML = 'En casa, en el trabajo, en ese rincón que quieres volver a disfrutar.<br><strong>Deja tus espacios relucientes.</strong>';
    hero.querySelector('.hero-kicker').innerHTML = '<span></span> LIMPIEZAS LUMIS · ZARAGOZA';
    hero.querySelector('.hero-micro').textContent = 'Hablemos de tu espacio. Presupuesto sin compromiso.';
    hero.querySelector('.scroll-invitation').innerHTML = '<span>↓</span> Descubre lo que podemos cuidar';
    const firstScene = hero.querySelector('#scene-hogar');
    firstScene.querySelector('img').src = 'assets/images/hero-humano.jpg';
    firstScene.querySelector('img').srcset = 'assets/images/hero-humano-sm.jpg 640w, assets/images/hero-humano.jpg 1536w';
    firstScene.querySelector('img').alt = 'Manos limpiando un cristal en una vivienda, ejemplo visual ilustrativo';
    firstScene.querySelector('.scene-caption h2').textContent = 'Que entre la luz.';
    firstScene.querySelector('.scene-caption p').textContent = 'Hay detalles que cambian el día.';
    firstScene.querySelector('.scene-caption a').href = 'cristales.html';

    const rail = d.createElement('div');
    rail.className = 'lumis-rail';
    rail.innerHTML = '<div><span>01 / CERCA DE TI</span><strong>Desde Zaragoza.</strong></div><div><span>02 / PARA CADA ESPACIO</span><strong>Hogar y negocio.</strong></div><div><span>03 / EMPEZAMOS HABLANDO</span><strong>Tu consulta, por WhatsApp.</strong></div>';
    hero.after(rail);

    const feeling = d.querySelector('.feeling-section');
    feeling.querySelector('.feeling-title').innerHTML = '<span class="eyebrow">EL PLACER DE VOLVER</span><h2>Que apetezca<br><em>abrir la puerta.</em></h2><p>Una casa que recibe. Un local listo para empezar. Una terraza que vuelve a invitarte a salir. Así se siente un espacio cuidado.</p><a class="text-link feeling-link" href="#servicios">Encuentra tu servicio ' + arrow + '</a>';
    feeling.querySelector('.feeling-note h3').innerHTML = 'Espacios para<br><em>vivirlos.</em>';
    feeling.querySelector('.feeling-note p').textContent = 'Lo que necesitas empieza con una conversación.';
    feeling.querySelector('.feeling-local > p').textContent = 'Una llamada. Un mensaje. Nos cuentas qué necesitas.';

    const spotlightHead = d.querySelector('.spotlight .section-head h2');
    if (spotlightHead) spotlightHead.innerHTML = 'Cada espacio tiene<br><em>su momento.</em>';
    const servicesHead = d.querySelector('.services-section .section-head h2');
    if (servicesHead) servicesHead.innerHTML = 'Encuentra justo<br><em>lo que buscas.</em>';
    const consultationHead = d.querySelector('.consultation-copy h2');
    if (consultationHead) consultationHead.innerHTML = 'Cuéntanos<br>tu espacio.<br><em>Lo vemos contigo.</em>';
  } else {
    const slug = file.slice(0, -5);
    const brief = briefs[slug];
    if (!brief) throw new Error(`Falta contenido para ${file}`);
    d.body.dataset.service = slug;
    const hero = d.querySelector('.service-hero');
    hero.querySelector('.eyebrow').textContent = 'LUMIS · ZARAGOZA · TU ESPACIO';
    const intro = d.querySelector('.service-intro');
    intro.querySelector('h2').innerHTML = `${brief[0]}<br><em>Hablemos de ello.</em>`;
    const bridge = d.createElement('aside');
    bridge.className = 'service-bridge section-pad';
    bridge.setAttribute('aria-label', 'Tu consulta');
    bridge.innerHTML = `<div class="bridge-number">L / ${String(Object.keys(briefs).indexOf(slug) + 1).padStart(2, '0')}</div><div><span class="eyebrow">UNA CONVERSACIÓN MÁS CLARA</span><h2>Empezamos por<br><em>tu espacio.</em></h2></div><p>${brief[1]}</p><div class="bridge-action"><span>${brief[2]}</span><a href="${hero.querySelector('.button').getAttribute('href')}" target="_blank" rel="noopener" aria-label="Consultar ${d.querySelector('h1').textContent} por WhatsApp">Escríbenos ${arrow}</a></div>`;
    intro.after(bridge);
    const galleryHead = d.querySelector('.service-gallery .section-head h2');
    if (galleryHead) galleryHead.innerHTML = 'Un espacio.<br><em>Otra sensación.</em>';
  }

  fs.writeFileSync(file, '<!doctype html>\n' + d.documentElement.outerHTML);
  dom.window.close();
}
console.log('Dirección editorial aplicada a 17 páginas.');
