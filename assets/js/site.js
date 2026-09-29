(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.main-nav');
  const dropdown = document.querySelector('.nav-dropdown');
  const closeMenu = () => {
    if (!navigation || !menuButton) return;
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    if (dropdown) dropdown.open = false;
  };
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = !navigation.classList.contains('open');
      navigation.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (navigation.classList.contains('open') || (dropdown && dropdown.open)) {
        closeMenu(); menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.header') && dropdown && dropdown.open) dropdown.open = false;
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }

  document.querySelectorAll('.compare').forEach(compare => {
    const range = compare.querySelector('input[type="range"]');
    if (!range) return;
    let pointer = null;
    const update = () => {
      const value = Math.max(0, Math.min(100, Number(range.value)));
      compare.style.setProperty('--split', value + '%');
      range.setAttribute('aria-valuetext', `${value}% de la imagen anterior y ${100 - value}% de la posterior`);
    };
    range.addEventListener('input', update);
    range.addEventListener('change', update);
    const moveToPointer = event => {
      const bounds = range.getBoundingClientRect();
      if (!bounds.width) return;
      range.value = String(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
      update();
    };
    range.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointer = event.pointerId;
      range.focus({ preventScroll: true });
      if (range.setPointerCapture) range.setPointerCapture(pointer);
      moveToPointer(event);
    });
    range.addEventListener('pointermove', event => { if (event.pointerId === pointer) moveToPointer(event); });
    const finishPointer = event => {
      if (event.pointerId !== pointer) return;
      if (range.hasPointerCapture && range.hasPointerCapture(pointer)) range.releasePointerCapture(pointer);
      pointer = null;
    };
    range.addEventListener('pointerup', finishPointer);
    range.addEventListener('pointercancel', finishPointer);
    update();
  });

  const search = document.getElementById('service-search');
  if (search) {
    const rows = [...document.querySelectorAll('.service-row')];
    const groups = [...document.querySelectorAll('.service-group')];
    const status = document.getElementById('search-status');
    const normalize = value => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    const update = () => {
      const query = normalize(search.value);
      let total = 0;
      rows.forEach(row => {
        row.hidden = Boolean(query) && !normalize(row.dataset.service || row.textContent).includes(query);
        if (!row.hidden) total++;
      });
      groups.forEach(group => { group.hidden = !group.querySelector('.service-row:not([hidden])'); });
      status.textContent = query ? `${total} ${total === 1 ? 'servicio encontrado' : 'servicios encontrados'}.` : '';
    };
    search.addEventListener('input', update);
  }

  const form = document.getElementById('contact-form');
  if (form) {
    const service = form.querySelector('[name="service"]');
    const zone = form.querySelector('[name="zone"]');
    const note = form.querySelector('[name="note"]');
    const link = document.getElementById('form-wa');
    const update = () => {
      const name = service.options[service.selectedIndex]?.textContent || 'un servicio de limpieza';
      let message = `Hola, he visto la web de Limpiezas Lumis y quería consultar ${name.toLocaleLowerCase('es')}.`;
      message += zone.value.trim() ? ` El espacio está en ${zone.value.trim()}.` : ' El espacio está en Zaragoza.';
      if (note.value.trim()) message += ` ${note.value.trim()}`;
      message += ' ¿Podemos hablar del presupuesto?';
      link.href = 'https://wa.me/34652609338?text=' + encodeURIComponent(message);
    };
    [service, zone, note].forEach(field => field.addEventListener(field === service ? 'change' : 'input', update));
    form.addEventListener('submit', event => { event.preventDefault(); link.focus(); });
    update();
  }
})();
