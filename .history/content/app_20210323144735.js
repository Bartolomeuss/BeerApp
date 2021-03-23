// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const beers = document.querySelector('.beers');


async function getBeers(){
    const promisedBeer = await fetch(urlBase);
    const beerData = await promisedBeer.json(); 
    let html = "";
    beers.forEach(beer => {
        beerHtml += `
         <div class='beer-wrapper card'>
             <div class='beer'>
                 <img class='beer__img' src="${beer.image_url}">
                 <h3>${beer.name}</h3>
                 <span class='beer__info'>
                     <span>ABV: ${beer.abv}%</span>
                     <span>IBU: ${beer.ibu}</span>
                 </span>
             </div>
             <div class='beer__content'>
                 <div class='beer__name'></div>
                 <div class='beer__tagline'></div>
                 <div class='beer__description'></div>
                 <div class='beer__food-pairing'>
                     Pair with: 
                 </div>
             </div>
         </div>
        `; 
     });

}

getBeers()