document.addEventListener('DOMContentLoaded', function() {
    const filtroContenedor = document.querySelector('#proyecto-filtro');
    const filtroBotones = filtroContenedor.querySelectorAll('.filtro-boton');
    const proyectoTarjetas = document.querySelectorAll('#proyecto-seccion .contenedor-proyecto');

    filtroProyecto('proyecto-1');
    ActivoBoton('proyecto-1');
    
    filtroContenedor.addEventListener('click', (e) => {
        const boton = e.target.closest('.filtro-boton');
        if (!boton) return;

        const filtro = boton.dataset.filter;
        
        filtroProyecto(filtro);
        ActivoBoton(filtro);
    });

    function filtroProyecto(filter) {
        proyectoTarjetas.forEach(card => {
            const categoria = card.dataset.category;
           
            if (filter === 'all' || filter === categoria) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
    
    function ActivoBoton(filter) {
        filtroBotones.forEach(btn => {
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    const botonParaSubir = document.getElementById('botonParaSubir');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botonParaSubir.style.display = "block";
        } else {
            botonParaSubir.style.display = "none";
        }
    };

    botonParaSubir.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    const graficos = document.querySelectorAll('.grafico');
    
    graficos.forEach(grafico => {
        grafico.addEventListener('mouseenter', () => {
            const porcentaje = grafico.querySelector('.porcentaje');
            porcentaje.style.fontSize = '1.8rem';
            porcentaje.style.fontWeight = 'bold';
            
            if (grafico.classList.contains('css')) {
                porcentaje.style.color = '#264de4';
            } else if (grafico.classList.contains('js')) {
                porcentaje.style.color = '#f0db4f';
            } else {
                porcentaje.style.color = '#e44d26';
            }
        });
        
        grafico.addEventListener('mouseleave', () => {
            const porcentaje = grafico.querySelector('.porcentaje');
            porcentaje.style.fontSize = '1.2rem';
            porcentaje.style.fontWeight = 'normal';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cortoPlazoBtn = document.getElementById('cortoPlazoBtn');
    const medianoPlazoBtn = document.getElementById('medianoPlazoBtn');
    const largoPlazoBtn= document.getElementById('largoPlazoBtn');

    const cortoPlazoMetas = document.getElementById('cortoPlazoMetas');
    const medianoPlazoMetas = document.getElementById('medianoPlazoMetas');
    const largoPlazoMetas = document.getElementById('largoPlazoMetas');

    function mostrarSeccion(secciones) {
        
        cortoPlazoMetas.classList.remove('active');
        medianoPlazoMetas.classList.remove('active');
        largoPlazoMetas.classList.remove('active');

        cortoPlazoBtn.classList.remove('active');
        medianoPlazoBtn.classList.remove('active');
        largoPlazoBtn.classList.remove('active');

        if (secciones === 'short') {
            cortoPlazoMetas.classList.add('active');
            cortoPlazoBtn.classList.add('active');
        } else if (secciones === 'medium') {
            medianoPlazoMetas.classList.add('active');
            medianoPlazoBtn.classList.add('active');
        } else if (secciones === 'long') {
            largoPlazoMetas.classList.add('active');
            largoPlazoBtn.classList.add('active');
        }
    }

    cortoPlazoBtn.addEventListener('click', () => mostrarSeccion('short'));
    medianoPlazoBtn.addEventListener('click', () => mostrarSeccion('medium'));
    largoPlazoBtn.addEventListener('click', () => mostrarSeccion('long'));

    mostrarSeccion('short');
});