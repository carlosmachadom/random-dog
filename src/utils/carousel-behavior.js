const carousel = null || document.querySelector('.carousel');
const cardWidth = null || document.querySelector('.list-hour-item').offsetWidth * 3;
const arrowButtons = null || document.querySelectorAll('.arrow');
const leftArrow = null || document.getElementById('left');
const rightArrow = null || document.getElementById('right');


let isDragging = false;
let startX;
let startScrollLeft;

// Función para actualizar la visibilidad de las flechas izquierda y derecha
function updateArrowVisibility() {
    // Obtiene la posición de desplazamiento, el ancho total y el ancho visible del carusel
    const scrollLeft = Math.round(carousel.scrollLeft);
    const scrollWidth = Math.round(carousel.scrollWidth);
    const clientWidth = Math.round(carousel.clientWidth);

    // Oculta o muestra las flechas izquierda y derecha según su posición
    leftArrow.style.display = scrollLeft === 0 ? 'none' : 'initial';
    rightArrow.style.display = (scrollLeft + 1 === scrollWidth - clientWidth) || (scrollLeft === scrollWidth - clientWidth) ? 'none' : 'initial';
}

// Función para desplazar el carusel en una dirección específica
function moveCarousel(direction) {
    // Desplaza el carusel hacia la izquierda o derecha según la dirección proporcionada
    //carousel.scrollLeft += direction * cardWidth;
    carousel.scrollLeft += direction * carousel.clientWidth;
}

// Evento para el inicio del arrastre (mousedown)
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

// Evento para el arrastre (mousemove)
const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Evento para el fin del arrastre (mouseup)
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}

// Agrega eventos click a los botones de flecha izquierda y derecha
arrowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtiene la dirección del desplazamiento (1 para derecha, -1 para izquierda)
        const direction = button.id === "left" ? -1 : 1;
        // Desplaza el carusel en la dirección determinada
        moveCarousel(direction);
    });
});

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', updateArrowVisibility);