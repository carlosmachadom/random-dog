export default function favouriteDoggieCard({ imgUrl, dogId }) { 
    const view = `
        <article class="dog-card" data-id="${dogId}">
            <figure class="dog--image">
                <img src="${imgUrl}" alt="image of a dog" title="image of a dog"/>
            </figure>

            <section class="dog--info">
                <button class="info__button delete-btn">Delete</button>
            </section>
        </article>
    `;

    return view; 
}