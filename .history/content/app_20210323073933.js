// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const beers = document.querySelector('.beers');


async function getBeers(){
    const promisedBeer = await fetch(urlBase);
    const newBeersArray = await promisedBeer.json(); 
    let html = "";
    newBeersArray.forEach(beer => {
        const beerName = beer.name;
        const beerTagline = beer.tagline;
        html += `
        <h2>${beerName}</h2>
        <p>${beerTagline}</p>
        `;
        beers.innerHTML=html;
        
    });


}

getBeers()