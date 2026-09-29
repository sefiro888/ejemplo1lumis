const categories = [
  { id: 'hogar', name: 'Tu hogar', short: 'Hogar', image: 'viviendas', description: 'Para volver a disfrutar de cada estancia.', line: 'El cuidado de casa empieza por lo que más importa en tu día a día.' },
  { id: 'exterior', name: 'Luz y exterior', short: 'Exterior', image: 'lumis-terraza', description: 'Cristales, toldos y terrazas con otra mirada.', line: 'Cuando entra la luz y apetece salir, todo cambia.' },
  { id: 'profesional', name: 'Espacios profesionales', short: 'Negocios', image: 'lumis-oficina', description: 'Lugares preparados para recibir y trabajar.', line: 'Tu espacio también habla de cómo cuidas a las personas.' },
  { id: 'superficies', name: 'Suelos y tejidos', short: 'Superficies', image: 'pulido', description: 'El detalle está en los materiales.', line: 'Cada superficie tiene su propio estado y merece una consulta precisa.' }
];

const services = [
  {
    slug:'pisos-viviendas', name:'Pisos y viviendas', category:'hogar', image:'viviendas', number:'01',
    hero:'Una casa que vuelve a sentirse tuya.', subtitle:'Limpieza de pisos y viviendas en Zaragoza.',
    lead:'Hay días en los que apetece llegar a casa y encontrarlo todo en calma. Si quieres consultar la limpieza de una vivienda, empecemos por entender cómo es y qué zonas te importan más.',
    second:'Una estancia de uso diario, una vivienda completa o un espacio que necesita atención puntual pueden plantear necesidades distintas. Cuanto más claro sea el punto de partida, más útil será la conversación.',
    contexts:['Viviendas de uso diario','Pisos que necesitan una puesta a punto','Estancias con prioridades concretas'],
    details:['Número de estancias y tamaño aproximado','Zonas que te gustaría priorizar','Fotografías si ayudan a explicar el estado'],
    care:'Antes de consultar, anota las zonas que más usas y las que llevan tiempo pendientes. Esa lista ayuda a ordenar las prioridades sin olvidar ningún rincón.',
    faqs:[['¿Puedo preguntar por una sola estancia?','Sí, describe la estancia y lo que necesitas. El alcance se concreta directamente al hablar con Lumis.'],['¿Qué debo contar para pedir presupuesto?','La zona de Zaragoza, el tipo y tamaño aproximado de vivienda, y las áreas prioritarias. Unas fotografías pueden ayudar.'],['¿Hay una lista cerrada de tareas?','El contenido del servicio se acuerda según el espacio y las necesidades que expliques en tu consulta.']],
    gallery:['hero-humano','interiores'], related:['limpieza-general','interiores','cristales']
  },
  {
    slug:'limpieza-general', name:'Limpieza general', category:'hogar', image:'general', number:'02',
    hero:'Una puesta a punto que se nota.', subtitle:'Limpieza general en Zaragoza.',
    lead:'Cuando varias zonas necesitan atención, conviene mirar el espacio en conjunto. Una limpieza general empieza por entender qué se usa, qué preocupa y qué resultado buscas.',
    second:'Puede ser una vivienda o un espacio de otro tipo. En vez de partir de una lista genérica, cuéntanos cuáles son las superficies, estancias y prioridades de tu caso.',
    contexts:['Espacios con varias zonas pendientes','Puestas a punto puntuales','Viviendas con prioridades diferentes'],
    details:['Tipo de espacio y tamaño aproximado','Estancias o superficies prioritarias','Acceso y fotografías de las zonas relevantes'],
    care:'Haz una lista corta de prioridades y aparta los objetos personales que prefieras mantener fuera de las zonas a tratar. No hace falta resolver todos los detalles antes de escribir.',
    faqs:[['¿Qué incluye exactamente?','El alcance depende del espacio y de lo que acordéis en la consulta. Comparte tus prioridades para recibir una respuesta concreta.'],['¿Puedo enviar fotografías?','Sí. Las imágenes ayudan a explicar el estado de las zonas que requieren atención.'],['¿Es solo para viviendas?','Puedes describir otro tipo de espacio y consultar con Lumis si el servicio encaja.']],
    gallery:['interiores','viviendas'], related:['pisos-viviendas','interiores','desinfeccion-interiores']
  },
  {
    slug:'interiores', name:'Interiores', category:'hogar', image:'interiores', number:'03',
    hero:'Cada rincón suma al conjunto.', subtitle:'Limpieza integral de interiores en Zaragoza.',
    lead:'Un interior no es una sola superficie. Suelos, mobiliario, zonas de paso y pequeños detalles crean la sensación general de un espacio.',
    second:'Para hablar de limpieza integral, ayuda saber cómo se distribuye el lugar y qué materiales necesitan especial atención. Así la consulta parte de una imagen más completa.',
    contexts:['Viviendas con varias estancias','Interiores de uso profesional','Espacios que requieren una visión de conjunto'],
    details:['Distribución y dimensiones aproximadas','Materiales o superficies delicadas','Áreas de uso frecuente y fotografías'],
    care:'Si hay materiales especiales o elementos delicados, indícalos antes de cualquier intervención. Evita probar productos desconocidos en superficies sensibles.',
    faqs:[['¿Qué significa limpieza integral?','Es una consulta sobre el interior en su conjunto. Las tareas concretas y su alcance se acuerdan según el espacio.'],['¿Debo detallar los materiales?','Si conoces el material de suelos, encimeras o mobiliario, compártelo. Si no, unas fotos pueden orientar la conversación.'],['¿Puedo priorizar algunas zonas?','Sí. Explicar qué zonas te preocupan ayuda a organizar la consulta.']],
    gallery:['general','viviendas'], compare:['interiores-antes','interiores-despues'], related:['limpieza-general','pisos-viviendas','desinfeccion-interiores']
  },
  {
    slug:'desinfeccion-interiores', name:'Desinfección de interiores', category:'hogar', image:'desinfeccion', number:'04',
    hero:'Primero, entendamos tu necesidad.', subtitle:'Consulta sobre desinfección de interiores en Zaragoza.',
    lead:'La palabra desinfección puede referirse a situaciones muy diferentes. Lo responsable es empezar por saber qué espacio es, cómo se utiliza y qué te preocupa exactamente.',
    second:'Describe la zona y el motivo de la consulta. Lumis podrá indicarte qué información adicional necesita y qué alcance puede valorar. Esta página no hace promesas sanitarias.',
    contexts:['Interiores domésticos','Espacios compartidos','Zonas de uso frecuente'],
    details:['Tipo de espacio y uso habitual','Motivo concreto de la consulta','Dimensiones y fotografías si son útiles'],
    care:'Si existe una preocupación de salud específica, consulta también con un profesional sanitario o la autoridad competente. No apliques productos incompatibles entre sí.',
    faqs:[['¿La desinfección garantiza un resultado sanitario?','No se anuncian garantías sanitarias. El alcance y la conveniencia del servicio deben tratarse con Lumis según el caso.'],['¿Qué información conviene enviar?','Tipo de interior, uso, dimensiones aproximadas y el motivo de la consulta.'],['¿Puedo consultar una zona pequeña?','Sí. Explica qué zona es para que Lumis valore el alcance de la solicitud.']],
    gallery:['interiores','general'], related:['interiores','limpieza-general','pisos-viviendas']
  },
  {
    slug:'cristales', name:'Cristales', category:'exterior', image:'cristales', number:'05',
    hero:'Que la luz haga su trabajo.', subtitle:'Limpieza de cristales en Zaragoza.',
    lead:'Los cristales cambian cómo se ve y se siente un lugar. Una ventana en casa, un ventanal o un escaparate tienen tamaños, accesos y necesidades diferentes.',
    second:'Cuéntanos dónde están, cuántos son y si hay elementos que dificulten el acceso. Con unas fotografías es más sencillo entender el espacio antes de hablar de presupuesto.',
    contexts:['Ventanas de viviendas','Ventanales y puertas acristaladas','Cristales en locales y oficinas'],
    details:['Número y tamaño aproximado de cristales','Altura y condiciones de acceso','Fotos de marcos y superficies'],
    care:'No uses utensilios abrasivos sobre el vidrio ni fuerces un acceso difícil. Para manchas persistentes, describe su origen antes de probar una solución por tu cuenta.',
    faqs:[['¿También puedo consultar marcos?','Sí, indícalo en el mensaje para que la consulta incluya esa necesidad.'],['¿Necesitáis saber la altura?','Es útil indicar la altura y cómo se accede a los cristales, sobre todo si no están a nivel de suelo.'],['¿Sirven fotos hechas con el móvil?','Sí. Una vista general y otra de los detalles ayudan a explicar el trabajo.']],
    gallery:['hero-humano','oficinas'], compare:['cristales-antes','cristales-despues'], related:['toldos','terrazas','pisos-viviendas']
  },
  {
    slug:'toldos', name:'Toldos', category:'exterior', image:'toldos', number:'06',
    hero:'Otra mirada hacia fuera.', subtitle:'Limpieza de toldos en Zaragoza.',
    lead:'El toldo forma parte de la imagen de una vivienda o un negocio. La exposición al exterior y el tipo de tejido influyen en cómo conviene plantear su cuidado.',
    second:'Antes de hablar de un trabajo concreto, describe el toldo, su tamaño y su estado. Una foto abierta y otra de las zonas que te preocupan son un buen comienzo.',
    contexts:['Toldos de terrazas','Toldos de fachadas comerciales','Elementos expuestos a polvo y lluvia'],
    details:['Número y medidas aproximadas','Material si lo conoces','Acceso, altura y fotografías'],
    care:'Evita cepillos duros o productos agresivos si no conoces el material. Conserva la información del fabricante cuando esté disponible.',
    faqs:[['¿Importa el material del toldo?','Sí. Si lo conoces, indícalo; si no, una fotografía puede ayudar a identificar el tipo de superficie.'],['¿Debo enviar medidas exactas?','Una medida aproximada basta para iniciar la conversación.'],['¿Puedo consultar varios toldos?','Sí. Señala cuántos son y si tienen tamaños o estados distintos.']],
    gallery:['lumis-terraza','terrazas'], compare:['toldos-antes','toldos-despues'], related:['terrazas','cristales','pisos-viviendas']
  },
  {
    slug:'terrazas', name:'Terrazas', category:'exterior', image:'terrazas', number:'07',
    hero:'Tu lugar al aire libre, de nuevo.', subtitle:'Limpieza de terrazas en Zaragoza.',
    lead:'Una terraza puede ser un pequeño rincón o una zona amplia que comparte suelo, mobiliario y elementos expuestos al tiempo. Para cuidarla, primero hay que entenderla.',
    second:'Cuéntanos qué superficie tiene, qué hay en ella y qué zona necesita más atención. Así podrás plantear la consulta de forma concreta.',
    contexts:['Terrazas de viviendas','Zonas exteriores de negocios','Espacios con mobiliario y macetas'],
    details:['Tamaño y tipo de pavimento','Mobiliario y elementos presentes','Desagües, acceso y fotografías'],
    care:'Antes de aplicar cualquier producto, comprueba el material del suelo y evita mezclar tratamientos. Retira los objetos pequeños que quieras proteger.',
    faqs:[['¿Puedo preguntar solo por el suelo?','Sí. Indica que tu interés se centra en el pavimento y comparte su material si lo conoces.'],['¿Las macetas o muebles influyen?','Conviene mencionar los elementos presentes para situar mejor el alcance de la consulta.'],['¿Hace falta una foto general?','Una imagen de toda la terraza y otra de los detalles suelen ser útiles.']],
    gallery:['lumis-terraza','toldos'], compare:['terrazas-antes','terrazas-despues'], related:['toldos','cristales','pulido-suelos']
  },
  {
    slug:'oficinas', name:'Oficinas', category:'profesional', image:'oficinas', number:'08',
    hero:'Un buen lugar para trabajar.', subtitle:'Limpieza de oficinas en Zaragoza.',
    lead:'Una oficina reúne personas, puestos de trabajo y zonas comunes. El tipo de actividad y la distribución ayudan a entender qué necesita el espacio.',
    second:'Cuéntanos si hay salas de reuniones, recepción u otras zonas que merecen especial atención. La consulta puede organizarse alrededor del uso real del lugar.',
    contexts:['Despachos y puestos de trabajo','Salas de reunión y recepción','Zonas comunes de equipos'],
    details:['Superficie y distribución aproximada','Uso de cada zona','Acceso y fotografías de las áreas principales'],
    care:'Antes de la consulta, distingue las zonas de trabajo de los espacios compartidos. Señala equipos o materiales que requieran especial cuidado.',
    faqs:[['¿Puedo consultar solo una parte de la oficina?','Sí. Describe las zonas concretas y lo que te gustaría priorizar.'],['¿Debo indicar cuántas personas usan el espacio?','Puede ayudar a entender el uso de las zonas, aunque basta con una aproximación.'],['¿Qué fotos son útiles?','Una vista general de la distribución y fotografías de las zonas prioritarias.']],
    gallery:['lumis-oficina','cristales'], related:['gimnasios','comunidades','cristales']
  },
  {
    slug:'gimnasios', name:'Gimnasios', category:'profesional', image:'gimnasios', number:'09',
    hero:'Un espacio que invita a moverse.', subtitle:'Limpieza de gimnasios en Zaragoza.',
    lead:'Un gimnasio combina salas de actividad, zonas de paso y superficies de uso frecuente. Cada área tiene un ritmo distinto.',
    second:'Para orientar la consulta, describe las zonas y el tipo de actividad que se desarrolla en ellas. Así podrás explicar mejor tus prioridades.',
    contexts:['Salas de entrenamiento','Recepción y circulación','Vestíbulos y zonas comunes'],
    details:['Distribución de salas','Tamaño aproximado y uso','Superficies que requieren atención'],
    care:'Identifica las zonas más usadas y las superficies delicadas. No apliques productos de limpieza directamente sobre equipos sin conocer sus indicaciones.',
    faqs:[['¿Puedo consultar varias salas?','Sí. Enumera las salas y explica si tienen usos o superficies diferentes.'],['¿Qué información ayuda más?','Distribución, tamaño aproximado y prioridades del espacio.'],['¿Hay que definir un método antes?','No. Describe la necesidad y consulta con Lumis el alcance posible.']],
    gallery:['lumis-oficina','oficinas'], related:['oficinas','comunidades','desinfeccion-interiores']
  },
  {
    slug:'comunidades', name:'Comunidades', category:'profesional', image:'comunidades', number:'10',
    hero:'Cuidar lo que compartimos.', subtitle:'Limpieza de comunidades en Zaragoza.',
    lead:'El portal es la bienvenida. Escaleras, rellanos y otras zonas comunes acompañan la vida diaria de todos los vecinos.',
    second:'Cada edificio tiene una distribución y un uso diferentes. Una descripción de las zonas compartidas ayuda a concretar la consulta.',
    contexts:['Portales y accesos','Escaleras y rellanos','Otras zonas compartidas'],
    details:['Número de plantas y distribución','Zonas comunes a considerar','Materiales del suelo y fotografías'],
    care:'Haz un recorrido por las zonas compartidas y anota los puntos que generan más preguntas. Si hay materiales especiales, inclúyelos en la consulta.',
    faqs:[['¿Puedo escribir como vecino?','Sí. Explica si consultas a título personal o en nombre de una comunidad.'],['¿Debo indicar el número de plantas?','Ayuda a situar el tamaño del espacio, junto con fotos del portal y las zonas comunes.'],['¿Qué ocurre con un garaje comunitario?','Puedes mencionarlo en la misma consulta o visitar la página de garajes para describirlo mejor.']],
    gallery:['garajes','interiores'], related:['garajes','oficinas','pulido-suelos']
  },
  {
    slug:'garajes', name:'Garajes', category:'profesional', image:'garajes', number:'11',
    hero:'La buena impresión empieza al llegar.', subtitle:'Limpieza de garajes en Zaragoza.',
    lead:'Un garaje tiene accesos, plazas, zonas de circulación y quizá áreas de uso común. Entender su tamaño y distribución es esencial para hablar del servicio.',
    second:'Cuéntanos si pertenece a una comunidad o a un negocio, qué zonas te preocupan y cómo se accede al espacio.',
    contexts:['Garajes comunitarios','Zonas de aparcamiento de negocios','Rampas y áreas de circulación'],
    details:['Número aproximado de plazas','Rampas, accesos y distribución','Fotografías de las áreas prioritarias'],
    care:'Señala manchas o zonas con acumulación de suciedad sin intentar tratarlas con productos desconocidos. El material del suelo también puede ser relevante.',
    faqs:[['¿Hace falta saber los metros exactos?','Una estimación o el número de plazas ayuda a empezar; se podrá concretar después.'],['¿Puedo consultar solo una zona?','Sí. Señala claramente cuál es y comparte una foto.'],['¿Importa el acceso?','Sí, una descripción de entradas y rampas ayuda a comprender el espacio.']],
    gallery:['comunidades','naves'], compare:['garajes-antes','garajes-despues'], related:['comunidades','naves','pulido-suelos']
  },
  {
    slug:'naves', name:'Naves', category:'profesional', image:'naves', number:'12',
    hero:'Cada zona de trabajo importa.', subtitle:'Limpieza de naves en Zaragoza.',
    lead:'Una nave puede incluir áreas abiertas, pasillos, oficinas y accesos con necesidades distintas. La mejor conversación empieza por un plano mental del lugar.',
    second:'Describe qué actividad se desarrolla, qué zonas quieres consultar y qué condiciones de acceso hay. Evita suponer que todos los espacios industriales necesitan lo mismo.',
    contexts:['Áreas amplias de trabajo','Pasillos y accesos','Zonas anexas y oficinas'],
    details:['Dimensiones aproximadas','Uso de cada área','Accesos y fotografías generales'],
    care:'Antes de consultar, identifica zonas con restricciones, materiales sensibles o equipos que deban permanecer intactos. No manipules instalaciones para preparar fotografías.',
    faqs:[['¿Puedo consultar una parte de la nave?','Sí. Marca las áreas concretas y su tamaño aproximado.'],['¿Es útil un plano?','Si ya tienes uno, puede ayudar, pero una descripción y fotografías también sirven para empezar.'],['¿Debo explicar la actividad?','Sí, el uso de cada zona ofrece contexto para hablar del alcance.']],
    gallery:['garajes','oficinas'], related:['garajes','oficinas','comunidades']
  },
  {
    slug:'pulido-suelos', name:'Pulido de suelos', category:'superficies', image:'pulido', number:'13',
    hero:'El suelo también cambia la estancia.', subtitle:'Consulta sobre pulido de suelos en Zaragoza.',
    lead:'El pulido se consulta mejor cuando sabemos de qué material es el suelo y cuál es su estado actual. No todas las superficies admiten el mismo tratamiento.',
    second:'Envíanos una descripción y fotografías con luz natural. Así Lumis podrá valorar contigo si el servicio es adecuado para tu caso.',
    contexts:['Suelos de viviendas','Superficies de negocios','Zonas con desgaste visible'],
    details:['Material del suelo si lo conoces','Superficie aproximada','Fotografías generales y de detalle'],
    care:'No utilices abrasivos ni tratamientos improvisados para intentar corregir marcas. Si conoces tratamientos previos del suelo, coméntalos.',
    faqs:[['¿Todos los suelos se pueden pulir?','No conviene darlo por hecho. El material y el estado determinan qué opciones se pueden valorar.'],['¿Cómo fotografío el suelo?','Haz una imagen general y otra de cerca con luz natural, evitando reflejos muy fuertes.'],['¿Qué diferencia hay con el abrillantado?','Son consultas distintas. Indica el material y el resultado que buscas para orientar la conversación.']],
    gallery:['abrillantado','interiores'], compare:['suelos-antes','suelos-despues'], related:['abrillantado-suelos','pisos-viviendas','oficinas']
  },
  {
    slug:'abrillantado-suelos', name:'Abrillantado de suelos', category:'superficies', image:'abrillantado', number:'14',
    hero:'La luz también está bajo tus pies.', subtitle:'Consulta sobre abrillantado de suelos en Zaragoza.',
    lead:'El acabado de un suelo influye mucho en cómo se percibe una estancia. Para consultar un abrillantado, lo primero es identificar el material y el estado de la superficie.',
    second:'No se puede prometer un resultado idéntico para todos los suelos. Una conversación con fotografías permitirá valorar mejor tu caso.',
    contexts:['Suelos de zonas de paso','Interiores de viviendas','Espacios profesionales'],
    details:['Tipo de material','Metros cuadrados aproximados','Estado actual y fotografías'],
    care:'Evita ceras o productos sin comprobar su compatibilidad con el material. Si el suelo recibió un tratamiento anterior, menciónalo.',
    faqs:[['¿Es lo mismo que pulir?','No necesariamente. Indica el material y lo que buscas para que Lumis pueda orientarte sobre la consulta adecuada.'],['¿Puedo preguntar por una zona pequeña?','Sí. Describe qué zona es y su tamaño aproximado.'],['¿Hace falta una fotografía?','Ayuda mucho a mostrar el acabado y las marcas visibles.']],
    gallery:['pulido','interiores'], related:['pulido-suelos','comunidades','oficinas']
  },
  {
    slug:'tapicerias', name:'Tapicerías', category:'superficies', image:'tapicerias', number:'15', tentative:true,
    hero:'Los tejidos también hacen hogar.', subtitle:'Consulta sobre limpieza de tapicerías en Zaragoza.',
    lead:'Sillas, butacas y otras piezas tapizadas tienen materiales y usos diferentes. Antes de hablar de su cuidado, conviene saber qué tejido es y cómo se encuentra.',
    second:'Este servicio aparece en referencias externas y su disponibilidad debe confirmarse directamente con Lumis. La página sirve para preparar una consulta clara, sin prometer un tratamiento concreto.',
    contexts:['Sillas tapizadas','Butacas y piezas textiles','Mobiliario de uso frecuente'],
    details:['Tipo y número de piezas','Tejido o etiqueta si está disponible','Fotos del conjunto y de las zonas relevantes'],
    care:'Comprueba la etiqueta del fabricante antes de intervenir y evita probar productos en un área visible. Algunas fibras requieren cuidados especiales.',
    faqs:[['¿Lumis ofrece este servicio?','Consulta su disponibilidad directamente con Lumis antes de darla por confirmada.'],['¿Debo identificar el tejido?','Si tienes etiqueta o información del fabricante, compártela. Si no, envía una fotografía.'],['¿Puedo consultar varias piezas?','Sí. Indica cuántas son y si tienen tejidos distintos.']],
    gallery:['sofas','viviendas'], related:['sofas','pisos-viviendas','interiores']
  },
  {
    slug:'sofas', name:'Sofás', category:'superficies', image:'sofas', number:'16', tentative:true,
    hero:'Tu rincón favorito también cuenta.', subtitle:'Consulta sobre limpieza de sofás en Zaragoza.',
    lead:'El sofá suele ser una de las piezas más vividas de la casa. Su tamaño, tejido y estado cambian la forma de plantear cualquier consulta de cuidado.',
    second:'La disponibilidad de este servicio debe confirmarse directamente con Lumis. Comparte fotografías y datos del tejido para poder hablar de posibilidades reales.',
    contexts:['Sofás de viviendas','Sofás modulares','Piezas con tejidos distintos'],
    details:['Número de plazas y forma','Tejido o etiqueta si la conoces','Fotografías generales y de detalle'],
    care:'Evita frotar manchas con fuerza o aplicar productos sin comprobar las indicaciones del fabricante. Conserva la etiqueta del tejido si existe.',
    faqs:[['¿Lumis limpia sofás?','Confirma directamente con Lumis la disponibilidad y el alcance del servicio.'],['¿Qué fotos debo enviar?','Una imagen del sofá completo y otra de las zonas que te preocupan.'],['¿Importa el material?','Sí. Si conoces el tejido o tienes la etiqueta, esa información es muy útil.']],
    gallery:['tapicerias','viviendas'], related:['tapicerias','pisos-viviendas','interiores']
  }
];

module.exports = { categories, services };
