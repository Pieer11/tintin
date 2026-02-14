document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    yesBtn.addEventListener('click', () => {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    });

    // Función para mover el botón
    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Eventos para PC (mouse)
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    // Eventos para celular (touch)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Previene el zoom y scroll al tocar
        moveButton();
    });

    noBtn.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Previene que se mueva la pantalla mientras se arrastra
    });

    // Opcional: Animación suave al mover el botón
    noBtn.style.transition = 'left 0.2s ease, top 0.2s ease';
});