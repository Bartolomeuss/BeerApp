// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const beers = document.querySelector('.beers');


async function getBeers(){
    const promisedBeer = await fetch(urlBase);
    const beerData = await promisedBeer.json(); 
    let html = "";
    beerData.forEach(beer => {
        const beerName = beer.name;
        const beerTagline = beer.tagline;
        html += `
        <div class="beer-wrapper card">
            <div class="beer">
                <img class='beer__img' src="${beer.image_url}">
                <h3>${beer.name}</h3>
                <span class="beer__info">
                    <span>ABV: ${beer.abv}% </span>
                    <span>IBU: ${beer.ibu} </span>
                </span>
            </div>
        </div>
        `;
        beers.innerHTML=html;
        
    });


}

getBeers()