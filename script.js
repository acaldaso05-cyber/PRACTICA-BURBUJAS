const contenedor = document.getElementById("burbujas-container");

function crearBurbuja() {
    const div = document.createElement("div");
    div.classList.add("burbuja");

    // 1. Posición inicial (Azar en toda la pantalla)
    const inicioX = Math.random() * window.innerWidth;
    const inicioY = Math.random() * window.innerHeight;
    
    div.style.left = `${inicioX}px`;
    div.style.top = `${inicioY}px`;

    // 2. Tamaño aleatorio
    const size = Math.random() * 15 + 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    // 3. Dirección de la "explosión" (Movimiento aleatorio en X e Y)
    // Esto hace que viajen entre -200px y 200px desde su origen
    const destinoX = (Math.random() - 0.5) * 100; 
    const destinoY = (Math.random() - 0.5) * 100;

    div.style.setProperty('--dest-x', `${destinoX}px`);
    div.style.setProperty('--dest-y', `${destinoY}px`);

    // 4. Animación
    div.style.animation = `explosion ${Math.random() * 2 + 1}s ease-out forwards`;

    contenedor.appendChild(div);

    div.addEventListener("animationend", () => {
        div.remove();
    });
}

// Crear burbujas más rápido para el efecto de flujo
setInterval(crearBurbuja, 50);