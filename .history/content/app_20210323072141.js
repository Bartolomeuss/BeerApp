// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const beers = document.querySelector('.beers');


async function getBeers(){
    const newBeerData = await fetch(urlBase);
    const newBeerJson = await newBeerData.json(); 
    console.log(newBeerJson);

}

getBeers()