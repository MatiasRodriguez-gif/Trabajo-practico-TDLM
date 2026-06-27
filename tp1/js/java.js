
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
