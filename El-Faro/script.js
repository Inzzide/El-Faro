document.addEventListener("DOMContentLoaded", function() {
    // Función para abrir el modal
    function abrirModal(modal) {
        modal.style.display = 'block';
    }

    // Función para cerrar todos los modales
    function cerrarModales() {
        modalEnviarNoticia.style.display = 'none';
        modalContacto.style.display = 'none';
    }

    const $tiempo = document.querySelector('.tiempo');
    const $fecha = document.querySelector('.fecha');
    const btnEnviarNoticia = document.getElementById('btn-enviar-noticia');
    const btnContacto = document.getElementById('btn-contacto');
    const modalEnviarNoticia = document.getElementById('modal-enviar-noticia');
    const modalContacto = document.getElementById('modal-contacto');
    const btnCerrarModalEnviarNoticia = document.getElementById('btn-cerrar-modal-enviar-noticia');
    const btnCerrarModalContacto = document.getElementById('btn-cerrar-modal-contacto');

    // Función para abrir el modal de enviar noticia
    btnEnviarNoticia.addEventListener('click', () => {
        cerrarModales(); // Cerrar otros modales abiertos
        abrirModal(modalEnviarNoticia);
    });

    // Función para abrir el modal de contacto
    btnContacto.addEventListener('click', () => {
        cerrarModales(); // Cerrar otros modales abiertos
        abrirModal(modalContacto);
    });

    // Evento click para cerrar los modales al hacer clic en el botón de cerrar
    btnCerrarModalEnviarNoticia.addEventListener('click', () => {
        modalEnviarNoticia.style.display = 'none';
    });

    btnCerrarModalContacto.addEventListener('click', () => {
        modalContacto.style.display = 'none';
    });

    // Evento click para cerrar los modales al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modalEnviarNoticia || e.target === modalContacto) {
            cerrarModales();
        }
    });

    // Evento submit para los formularios (simplemente para prevenir el comportamiento por defecto)
    document.getElementById('form-enviar-noticia').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    document.getElementById('form-contacto').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // Función para el reloj digital
    function digitalClock(){
        let f = new Date(),
        dia = f.getDate(),
        mes = f.getMonth() + 1,
        anio = f.getFullYear(),
        diaSemana = f.getDay();

        dia = ('0' + dia).slice(-2);
        mes = ('0' + mes).slice(-2)

        let timeString = f.toLocaleTimeString();
        $tiempo.innerHTML = timeString;

        let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        let showSemana = (semana[diaSemana]);
        $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`
    }
    setInterval(() => {
        digitalClock()
    }, 1000);
});
