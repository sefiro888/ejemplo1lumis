# Limpiezas Lumis — demostración web

Web estática de Limpiezas Lumis en Zaragoza. La portada y las 16 páginas de servicio se generan con `scripts/build-v5.cjs` a partir del contenido específico de `scripts/content-v5.cjs`. Cada servicio tiene una página HTML independiente.

## Versión actual

- Diseño editorial responsive con navegación por cuatro tipos de espacio, buscador de servicios, fotografías locales y contacto guiado por WhatsApp.
- Páginas de servicio con situaciones orientativas, información útil para consultar presupuesto, consejos prudentes, preguntas frecuentes propias, galería y servicios relacionados.
- Siete comparativas ilustrativas con control por ratón, tacto y teclado: una en la portada y seis en páginas de servicio.
- Tipografías alojadas localmente y logotipo original conservado.
- Imágenes optimizadas de 1536 × 1024 px y variantes de 640 px. Las escenas generadas son ilustrativas y no muestran trabajos reales de Lumis.
- Los servicios de tapicerías y sofás necesitan confirmación de disponibilidad por parte de Lumis. No se anuncian horarios, precios, métodos, maquinaria, garantías ni reseñas no confirmadas.

Archivos activos: `assets/css/site.css`, `assets/js/site.js`, `scripts/content-v5.cjs` y `scripts/build-v5.cjs`. Los archivos de estilos y scripts de versiones anteriores permanecen como historial de desarrollo y no se cargan en las páginas actuales.

## Reconstruir y comprobar

```powershell
node scripts/build-v5.cjs
node scripts/verify-v5.cjs
```

La verificación comprueba rutas e imágenes locales, estructura de las 17 páginas, sintaxis CSS y JavaScript, y lógica del menú, buscador, consulta y comparador en un DOM aislado. No sustituye una revisión visual en navegador ni una prueba en dispositivos físicos.

Para ejecutar la verificación se necesita `jsdom` y `css-tree` en `scripts/.qa/node_modules`. El sitio publicado no necesita Node ni dependencias externas de JavaScript.

