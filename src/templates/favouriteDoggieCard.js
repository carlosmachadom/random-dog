export default function favouriteDoggieCard({ imgUrl }) { 
    const view = `
        <article class="dog-card">
            <figure class="dog--image">
                <img src="${imgUrl}" alt="image of a dog" title="image of a dog/>
            </figure>

            <section class="dog--info">
                <button class="info__button favourite-btn">Delete</button>
            </section>
        </article>
    `;

    return view; 
}