export default function validateFavoriteDog({ id = "" } = {}) {
    const favoriteDogs = document.querySelectorAll("section.favourite-dogs > .list-wrapper ul.dogs-list li.current-dog");
    let validation = false;

    [...favoriteDogs].map((card) => {
        if (card.childNodes[1].dataset.imageId === id) {
            validation = true;
        }
    });

    return validation;
}