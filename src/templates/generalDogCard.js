import "@styles/templates/generalDogCard.css";

export default function generalDogCard({
    imgUrl,
    dogId,
    breeds = []
} = {}) { 
    let view = "";

    if (breeds.length != 0) { 
        let { name, bred_for, temperament, life_span } = breeds[0]; 
        
        view = `
            <article class="dog-card general breeds" data-id="${dogId}">
                <figure class="dog--image">
                    <img src="${imgUrl}" alt="image of a lovely dog" title="image of a lovely dog"/>
                </figure>
    
                <section class="dog--info">
                    <div class="info--description">
                        <h3 class="info__breed">Breed: ${name}</h3>
                        <p class="info__job"><strong>Breed for:</strong> ${bred_for}</p>
                        <p class="info__temperament"><strong>Temperament:</strong> ${temperament}</p>
                        <p class="info__life"><strong>Life span:</strong> ${life_span}</p>
                    </div>    
                </section>
                
                <button class="info__button favourite-btn">${"💘"}</button>
            </article>
        `;
    } else {
        view = `
            <article class="dog-card general" data-id="${dogId}">
                <figure class="dog--image">
                    <img src="${imgUrl}" alt="image of a lovely dog" title="image of a lovely dog"/>
                </figure>
                
                <button class="info__button favourite-btn">${"💘"}</button>
            </article>
        `;
    }

    return view; 
}