const randomDogsCarousel = null || document.querySelector('.random-dogs .list-wrapper .dogs-list');
const arrowButtons = null || document.querySelectorAll('.random-dogs .list-wrapper .arrow');
const leftArrow = null || document.querySelector('.random-dogs .list-wrapper .arrow.left');
const rightArrow = null || document.querySelector('.random-dogs .list-wrapper .arrow.right');

let isDragging = false;
let startX;
let startScrollLeft;

// Función para actualizar la visibilidad de las flechas izquierda y derecha
function updateArrowVisibilityRandomCarousel() {
    // Obtiene la posición de desplazamiento, el ancho total y el ancho visible del carusel
    const scrollLeft = Math.round(randomDogsCarousel.scrollLeft);
    const scrollWidth = Math.round(randomDogsCarousel.scrollWidth);
    const clientWidth = Math.round(randomDogsCarousel.clientWidth);

    // Oculta o muestra las flechas izquierda y derecha según su posición
    leftArrow.style.display = scrollLeft === 0 ? 'none' : 'initial';
    rightArrow.style.display =
        (scrollLeft === scrollWidth - clientWidth - 1) ||
        (scrollLeft - 1 === scrollWidth - clientWidth) ||
        (scrollLeft === scrollWidth - clientWidth) ? 'none' : 'initial';
}

// Función para desplazar el carusel en una dirección específica
function moveCarousel(direction) {
    // Desplaza el carusel hacia la izquierda o derecha según la dirección proporcionada
    randomDogsCarousel.scrollLeft += direction * randomDogsCarousel.clientWidth;
}

// Evento para el inicio del arrastre (mousedown)
const dragStart = (e) => {
    isDragging = true;
    randomDogsCarousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = randomDogsCarousel.scrollLeft;
}

// Evento para el arrastre (mousemove)
const dragging = (e) => {
    if (!isDragging) return;
    randomDogsCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Evento para el fin del arrastre (mouseup)
const dragStop = () => {
    isDragging = false;
    randomDogsCarousel.classList.remove('dragging');
}

// Agrega eventos click a los botones de flecha izquierda y derecha
arrowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtiene la dirección del desplazamiento (1 para derecha, -1 para izquierda)
        const direction = button.classList.contains("left") ? -1 : 1;
        // Desplaza el carusel en la dirección determinada
        moveCarousel(direction);
    });
});

window.addEventListener('resize', updateArrowVisibilityRandomCarousel);
randomDogsCarousel.addEventListener('scroll', updateArrowVisibilityRandomCarousel);
randomDogsCarousel.addEventListener('mousedown', dragStart);
randomDogsCarousel.addEventListener('mousemove', dragging);
randomDogsCarousel.addEventListener('mouseup', dragStop);

export {updateArrowVisibilityRandomCarousel}