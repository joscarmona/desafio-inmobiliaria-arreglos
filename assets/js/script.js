/* **************** PROPIEDADES EN ALQUILER **************** */
// Arreglo de objetos
const propiedadesAlquiler = [
    // Objeto 1
    {
        id: 1,
        nombre: 'Casa en el campo',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Cómoda casa ubicada a las afueras de la ciudad en terreno llano rodeada de árboles frutales',
        ubicacion: '635 Camino el Ruedo, Hualqui',
        habitaciones: 4,
        baños: 2,
        costo: 6500,
        smoke: false,
        pets: true
    },
    // Objeto 2
    {
        id: 2,
        nombre: 'Departamento en el centro de la ciudad',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen del departamento',
        descripcion: 'Hermoso departamento ubicado en la zona céntrica de la ciudad, cerca de universidades, comercio, hospitales, etc.',
        ubicacion: '2466 José Fernández, Concepción',
        habitaciones: 2,
        baños: 1,
        costo: 5000,
        smoke: false,
        pets: false
    },
    // Objeto 3
    {
        id: 3,
        nombre: 'Casa en zona residencial',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Amplia casa ubicada en zona residencial, muy tranquila',
        ubicacion: '792 Río Bueno, Talcahuano',
        habitaciones: 6,
        baños: 3,
        costo: 8000,
        smoke: true,
        pets: true
    },
    // Objeto 4
    {
        id: 4,
        nombre: 'Casa en la playa',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Casa ubicada justo a orilla de la playa',
        ubicacion: '5329 Puig Jara, Dichato',
        habitaciones: 4,
        baños: 2,
        costo: 10000,
        smoke: false,
        pets: false
    },
    // Objeto 5
    {
        id: 5,
        nombre: 'Departamento alejado del centro de la ciudad',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen del departamento',
        descripcion: 'Acogedor departamento ubicado en zona residecial extremadamente tranquila, alejado del ritmo frenetico que se vive en el centro de la ciudad',
        ubicacion: '6873 Media Plaza, Concepción',
        habitaciones: 3,
        baños: 2,
        costo: 3500,
        smoke: false,
        pets: false
    },
    // Objeto 6
    {
        id: 6,
        nombre: 'Condominio en zona suburbana',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen del condominio',
        descripcion: 'Ubicado en las afueras de la ciudad donde se respira aire fresco y reina la paz y la tranquilidad, con servicio de vigilancia 24/7',
        ubicacion: '513 La Verdadera Luz, Chiguayante',
        habitaciones: 5,
        baños: 3,
        costo: 7600,
        smoke: true,
        pets: true
    },
]

// Variable que guardará el contenido del arreglo de objetos propiedadesAlquiler para posteriormente añadirlo a la sección correspondiente en la página web propiedades_alquiler.html
// let dynamicContentOfPropiedadesAlquiler = ""

let dynamicContentOfPropiedades = ""

// Selección del elemento web en el cual se adicionará el contenido guardado en la variable dynamicContentOfPropiedades
const sectionElementProductGalleryAlquiler = document.querySelector("#propiedades-alquiler")

// Agregando el contenido de la variable dynamicContentOfPropiedades al elemento web asignado a la variable sectionElementProductGallery
sectionElementProductGalleryAlquiler ? sectionElementProductGalleryAlquiler.innerHTML = renderCard(propiedadesAlquiler) : ""

/*********************************************************** */

/* **************** PROPIEDADES EN VENTA **************** */
const propiedadesVenta = [
    // Objeto 1
    {   
        id: 1,
        nombre: 'Casa en el campo',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Rodeada de viñedos se ubica esta preciosa casa donde impera la paz',
        ubicacion: '145 Redondo García, Cabrero',
        habitaciones: 7,
        baños: 2,
        costo: 10500,
        smoke: true,
        pets: true
    },
    // Objeto 2
    {
        id: 2,
        nombre: 'Casa en zona residencial',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Casa ubicada entre el centro y las afueras de la ciudad permitiendo estar en una zona más tranquila sin tener que alejarse tanto de la ciudad',
        ubicacion: '3576 Sol Vive, Concepción',
        habitaciones: 4,
        baños: 2,
        costo: 6200,
        smoke: false,
        pets: true
    },
    // Objeto 3
    {
        id: 3,
        nombre: 'Departamento Home studio en parque industrial',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen del departamento',
        descripcion: 'Departamento ubicado en las cercanías de parque industrial, ideal si se trabaja en dicho lugar',
        ubicacion: '5274 Las Gaviotas, Coronel',
        habitaciones: 1,
        baños: 1,
        costo: 4100,
        smoke: false,
        pets: false
    },
    // Objeto 4
    {
        id: 4,
        nombre: 'Casa en la playa',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Cómoda casa ubicada frente al mar',
        ubicacion: '547 Las Estrelladas, Pingueral',
        habitaciones: 6,
        baños: 3,
        costo: 10200,
        smoke: true,
        pets: true
    },
    // Objeto 5
    {
        id: 5,
        nombre: 'Departamento en el centro',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen del departamento',
        descripcion: 'Departamento en pleno centro, solo a un par de cuadros de todos servicios, comercios, universidades, etc.',
        ubicacion: '1275 Luna Brilla, Concepción',
        habitaciones: 3,
        baños: 2,
        costo: 7500,
        smoke: false,
        pets: true
    },
    // Objeto 6
    {
        id: 6,
        nombre: 'Casa en las afueras de la ciudad',
        src: './assets/img/03_casa_campo.webp',
        alt: 'Imagen de la casa',
        descripcion: 'Hermosa casa ubicada a 10 minutos de la ciudad, cuenta con un terreno amplio poblado principalemente de árboles frutales',
        ubicacion: '1275 Luna Brilla, Concepción',
        habitaciones: 5,
        baños: 3,
        costo: 8650,
        smoke: true,
        pets: true
    }
]

// Variable que guardará el contenido del arreglo de objetos propiedadesVenta para posteriormente añadirlo a la sección correspondiente en la página web propiedades_venta.html
// let dynamicContentOfPropiedadesVenta = ""

dynamicContentOfPropiedades = ""

// Selección del elemento web en el cual se adicionará el contenido guardado en la variable dynamicContentOfPropiedades
const sectionElementProductGalleryVenta = document.querySelector("#propiedades-venta")

// Agregando el contenido de la variable dynamicContentOfPropiedades al elemento web asignado a la variable sectionElementProductGallery
sectionElementProductGalleryVenta ? sectionElementProductGalleryVenta.innerHTML = renderCard(propiedadesVenta) : ""

/* ***************************************************************************** */

/* **************** INDEX.HTML **************** */
/* *** VENTA *** */
// Variable que guardará el contenido del arreglo de objetos propiedadesVenta para posteriormente añadirlo a la sección correspondiente en la página web de inicio, solo se mostrarán 3 propiedades en ventas

dynamicContentOfPropiedades = ""

// Selección del elemento web en el cual se adicionará el contenido guardado en la variable dynamicContentOfPropiedades
const sectionElementProductGalleryIndexVenta = document.querySelector("#index-propiedades-venta")

// Agregando el contenido de la variable dynamicContentOfPropiedades al elemento web asignado a la variable sectionElementProductGallery
sectionElementProductGalleryIndexVenta ? sectionElementProductGalleryIndexVenta.innerHTML = renderCard(propiedadesVenta, 3) : ""

/* *** ALQUILER *** */
// Variable que guardará el contenido del arreglo de objetos propiedadesVenta para posteriormente añadirlo a la sección correspondiente en la página web de inicio, solo se mostrarán 3 propiedades en alquiler

dynamicContentOfPropiedades = ""

// Selección del elemento web en el cual se adicionará el contenido guardado en la variable dynamicContentOfPropiedades
const sectionElementProductGalleryIndexAlquiler = document.querySelector("#index-propiedades-alquiler")

// Agregando el contenido de la variable dynamicContentOfPropiedades al elemento web asignado a la variable sectionElementProductGallery
sectionElementProductGalleryIndexAlquiler ? sectionElementProductGalleryIndexAlquiler.innerHTML = renderCard(propiedadesAlquiler, 3) : ""

/* ***************************************************************************** */


/* **** FUNCIÓN QUE RETORNA EL CONTENIDO A AGREGAR EN EL HTML, **** */
/* ************** TANTO PARA VENTA COMO PARA ALQUILER ************* */
function renderCard(ArregloDePropiedades, propiedadId = ArregloDePropiedades.length){
    // Guardando el contenido del arreglo de objetos propiedadesAlquiler en la variable dynamicContentOfPropiedades
    for(let propiedad of ArregloDePropiedades){
        if(propiedad.id <= propiedadId){
            console.log(propiedad.id)

            dynamicContentOfPropiedades += `
            <!-- Card propiedad -->
            <article class="card">
                <!-- Card image -->
                <img src="${propiedad.src}" alt="${propiedad.alt}" class="card-image">
                <!-- Card body -->
                <div class="card-body">
                    <!-- Nombre -->
                    <h2 class="card-title">${propiedad.nombre}</h2>
                    <!-- Descripción -->
                    <p class="parrafo">${propiedad.descripcion}</p>
                    <!-- Ubicación -->
                    <p class="parrafo">
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <!-- Habitaciones -->
                    <p class="parrafo">
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                    </p>
                    <!-- Costo -->
                    <p class="parrafo"><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        `
        // Se chequea si en la propiedad se permite fumar o no se permite y mostrará la información que corresponda según sea el caso
        if(propiedad.smoke){
            dynamicContentOfPropiedades += `
                    <!-- Smoke -->
                    <p style="color: green;" class="parrafo">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>
                    ` 
        }
        else{
            dynamicContentOfPropiedades += `
                    <!-- Smoke -->
                    <p style="color: red;" class="parrafo">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>
                    `
        }
        // Se chequea si en la propiedad se permiten mascotas o no se permiten y mostrará la información que corresponda según sea el caso
        if(propiedad.pets){
            dynamicContentOfPropiedades += `
                    <!-- Pets -->
                    <p style="color: green;" class="parrafo">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>
                </div>
            </article>
            `        
        }
        else{
            dynamicContentOfPropiedades += `
                    <!-- Pets -->
                    <p style="color: red;" class="parrafo">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>
                </div>
            </article>
            `
        }
        }
        
    }

    return dynamicContentOfPropiedades
}