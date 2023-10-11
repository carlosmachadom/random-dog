export default function randomDoggieCard({
    imgUrl,
    breed = "Not available",
    bredFor = "Not available",
    temperament = "Not available",
    lifeSpan = "Not available",
    dogId
}) { 
    const view = `
        <article class="dog-card" data-id="${dogId}">
            <figure class="dog--image">
                <img src="${imgUrl}" alt="image of a dog: ${breed}" title="image of a dog: ${breed}"/>
            </figure>

            <section class="dog--info">
                <div class="info--description">
                    <h3 class="info__breed">Breed: ${breed}</h3>
                    <p class="info__job"><strong>Breed for:</strong> ${bredFor}</p>
                    <p class="info__temperament"><strong>Temperament:</strong> ${temperament}</p>
                    <p class="info__life"><strong>Life span:</strong> ${lifeSpan}</p>
                </div>

                <button class="info__button favourite-btn">Add to favorites</button>
            </section>
        </article>
    `;

    return view; 
}