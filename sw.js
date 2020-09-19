// Ciclo de vida del SW

self.addEventListener('install', event => {

    // descargar assets
    // creamos un cache
    console.log('Instalando SW ')

    // puede ser que pierdas info del otro sw
    // self.skipWaiting();

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas.')
            self.skipWaiting();
            resolve();
        }, 10);

    });

    event.waitUntil(instalacion);

});

// cuando el sw toma el control de la app
self.addEventListener('activate', event => {
    // borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app')

});

// fetch manejo de peticiones HTTP. Interceptamos la peticion. Util cuando esta sin conexion.

self.addEventListener('fetch', event => {

    console.log('SW', event.request.url);

    if (event.request.url.includes('https://reqres.in/')) {

        const resp = new Response(`{ok: false, mensaje: 'jaksdkasd}`);
        event.respondWith(resp);

    }

});