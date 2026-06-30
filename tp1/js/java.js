
    let ultimaPosicionScroll = window.pageYOffset;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        let posicionScrollActual = window.pageYOffset;

        if (ultimaPosicionScroll < posicionScrollActual) {
            // Si bajas, esconde el header moviéndolo hacia arriba fuera de la pantalla
            header.style.top = "-130px"; 
        } else {
            // Si subes, vuelve a mostrar el header en la posición original
            header.style.top = "0";
        }
        
        ultimaPosicionScroll = posicionScrollActual;
    });

    const centrosPorProvincia = {
        "Buenos Aires": [
            "Cáritas - Sede San Martín 123",
            "Red Solidaria - Av. Rivadavia 4500",
            "Fundación Sí - Calle 52 Nro 800 (La Plata)"
        ],
        "Córdoba": [
            "Hospital de Niños - Bajada Pucará 1900",
            "Comedor Sonrisas - Av. Colón 3200",
            "Banco de Alimentos - Calle Las Heras 45"
        ],
        "Santa Fe": [
            "Cruz Roja Argentina - Corrientes 2200",
            "Movimiento Solidario Rosario - Pellegrini 1100",
            "Hogar de Tránsito - San Martín 450"
        ],
        "Mendoza": [
            "Fundación Conin - Lisandro de la Torre 500",
            "Merendero Luz y Esperanza - Las Heras 120"
        ]
    };
    
    const selectProvincia = document.getElementById('selectProvincia');
    const selectLugares = document.getElementById('selectLugares');
    selectProvincia.addEventListener('change', (e) => {
        const provinciaSeleccionada = e.target.value;
        selectLugares.innerHTML =  '<option value="">-- Seleccioná un lugar de entrega --</option>';
        if (provinciaSeleccionada != '') {
        
            // Habilitamos el segundo selector
            selectLugares.disabled = false;
    
            // Buscamos los lugares de esa provincia en nuestra lista y los agregamos
            centrosPorProvincia[provinciaSeleccionada].forEach(lugar => {
                const nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = lugar;
                nuevaOpcion.textContent = lugar;
                selectLugares.appendChild(nuevaOpcion);});
            }else{
                    selectLugares.disabled = true}
    }
    
    )
