import "@styles/templates/uploadedDogCard.css"

export default function uploadedDoggieCard({ imgUrl, dogId }) { 
    const view = `
        <article class="dog-card" data-id="${dogId}">
            <figure class="dog--image">
                <img src="${imgUrl}" alt="image of a dog" title="image of a dog"/>
            </figure>

            <button class="info__button favorite-btn"></button>
            <button class="info__button delete-btn"></button>
        </article>
    `;

    return view; 
}