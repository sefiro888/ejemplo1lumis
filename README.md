# Limpiezas Lumis — web de demostración

La portada está en `index.html`. El sitio incluye 16 páginas de servicio independientes, rutas relativas y recursos locales; se puede abrir directamente o publicar la carpeta en GitHub Pages.

## Rediseño visual

- Portada luminosa, nueva composición, azul Lumis, blanco cálido y acentos celestes y lima.
- Navegación fotográfica agrupada en hogar, exteriores, espacios profesionales y superficies.
- Catálogo filtrable, menú móvil, contacto contextual por WhatsApp y siete comparadores (portada y seis servicios).
- Fotografías individuales de 1536 × 1024 px; variantes de 640 px para cargas pequeñas. Los antiguos recortes de 378 × 250 px han sido sustituidos.
- Tipografías Manrope e Instrument Serif alojadas localmente. Licencias en `assets/fonts/`.
- El logotipo original se conserva sin cambiar proporciones ni colores.

Estilos: `assets/css/styles.css`. Interacciones: `assets/js/main.js`.

## Imágenes y revisión comercial

Todas las fotografías son ejemplos visuales ilustrativos generados con image_gen. No son trabajos reales de Lumis. Los prompts están en `scripts/image-prompts.md`.

Antes de publicar como oferta definitiva, confirmar con Lumis los servicios de tapicerías y sofás. Sus páginas contienen comentarios de revisión y preguntas frecuentes que indican que debe consultarse la disponibilidad. Los métodos, productos, horarios, precios y alcance deben acordarse con la empresa; no se han añadido datos comerciales no confirmados.

## Comprobaciones realizadas

Se revisaron las 17 páginas, archivos y enlaces relativos, títulos, navegación, mensajes de WhatsApp y CSS. Se probaron en un DOM aislado el estado del menú para escritorio y móvil, las cinco categorías de filtrado y los manejadores de los siete comparadores. Informe: `scripts/verification.json`.

La apertura `file://` en la herramienta de navegador fue bloqueada; estas comprobaciones no sustituyen una revisión visual en un navegador real ni una prueba física con pantalla táctil.

Para repetir las comprobaciones de desarrollo:

    npm install --prefix scripts/.qa --no-save --no-package-lock --ignore-scripts jsdom postcss
    node scripts/verify.cjs

El sitio publicado no necesita Node, npm ni dependencias de JavaScript externas.

## Experiencia visual e interacciones (versión 3)

- Portada con tres escenas seleccionables: hogar, negocio y exterior. Cambian cada 7,2 segundos y se pueden pausar; se detienen al interactuar, quedar fuera de pantalla o activar movimiento reducido.
- Composición de bloques visuales, tarjetas escalonadas, detalles de color, animaciones suaves e indicador de avance de lectura.
- Consulta guiada en la portada: selección de espacio y servicio, zona y tamaño opcionales, vista previa y enlace a WhatsApp con mensaje preparado. No envía mensajes por sí sola.
- Galerías ampliables con navegación por teclado, cierre con Escape y restauración del foco.
- Navegación interna fija en las 16 páginas de servicio.

Estilos e interacciones adicionales: `assets/css/experience.css` y `assets/js/experience.js`. Para reconstruir esta capa después de `scripts/redesign.mjs`, ejecutar `node scripts/enhance.cjs` con las dependencias de desarrollo indicadas arriba.

Comprobaciones adicionales: `node scripts/verify-experience.cjs`. Informe: `scripts/experience-verification.json`. Son comprobaciones de DOM y lógica, no una validación visual en navegador.
