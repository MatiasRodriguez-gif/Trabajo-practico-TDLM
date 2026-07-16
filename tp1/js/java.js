
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
        
          
            selectLugares.disabled = false;
    
            centrosPorProvincia[provinciaSeleccionada].forEach(lugar => {
                const nuevaOpcion = document.createElement('option');
                nuevaOpcion.value = lugar;
                nuevaOpcion.textContent = lugar;
                selectLugares.append(nuevaOpcion);});
            }else{
                    selectLugares.disabled = true}
    }
    
    )
