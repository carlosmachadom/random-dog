const favouriteDogsCarousel = null || document.querySelector('.favourite-dogs .list-wrapper .dogs-list');
const arrowButtons = null || document.querySelectorAll('.favourite-dogs .list-wrapper .arrow');
const leftArrow = null || document.querySelector('.favourite-dogs .list-wrapper .arrow.left');
const rightArrow = null || document.querySelector('.favourite-dogs .list-wrapper .arrow.right');

let isDragging = false;
let startX;
let startScrollLeft;

// Función para actualizar la visibilidad de las flechas izquierda y derecha
function updateArrowVisibilityFavouriteCarousel() {
    // Obtiene la posición de desplazamiento, el ancho total y el ancho visible del carusel
    const scrollLeft = Math.round(favouriteDogsCarousel.scrollLeft);
    const scrollWidth = Math.round(favouriteDogsCarousel.scrollWidth);
    const clientWidth = Math.round(favouriteDogsCarousel.clientWidth);

    // Oculta o muestra las flechas izquierda y derecha según su posición
    leftArrow.style.display = scrollLeft === 0 ? 'none' : 'initial';
    rightArrow.style.display =
        (scrollLeft === scrollWidth - clientWidth - 1) ||
        (scrollLeft - 1 === scrollWidth - clientWidth) ||
        (scrollLeft === scrollWidth - clientWidth) ||
        (scrollLeft + clientWidth === scrollWidth) ? 'none' : 'initial';
}

// Función para desplazar el carusel en una dirección específica
function moveCarousel(direction) {
    // Desplaza el carusel hacia la izquierda o derecha según la dirección proporcionada
    favouriteDogsCarousel.scrollLeft += direction * favouriteDogsCarousel.clientWidth;
}

// Evento para el inicio del arrastre (mousedown)
const dragStart = (e) => {
    isDragging = true;
    favouriteDogsCarousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = favouriteDogsCarousel.scrollLeft;
}

// Evento para el arrastre (mousemove)
const dragging = (e) => {
    if (!isDragging) return;
    favouriteDogsCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Evento para el fin del arrastre (mouseup)
const dragStop = () => {
    isDragging = false;
    favouriteDogsCarousel.classList.remove('dragging');
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

window.addEventListener('resize', updateArrowVisibilityFavouriteCarousel);
favouriteDogsCarousel.addEventListener('scroll', updateArrowVisibilityFavouriteCarousel);
favouriteDogsCarousel.addEventListener('mousedown', dragStart);
favouriteDogsCarousel.addEventListener('mousemove', dragging);
favouriteDogsCarousel.addEventListener('mouseup', dragStop);

export { updateArrowVisibilityFavouriteCarousel }