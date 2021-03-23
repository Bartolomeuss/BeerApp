// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const beers = document.querySelector('.beers');


async function getBeers(){
    const newBeerData = await fetch(urlBase);
    const newBeersArray = await newBeerData.json(); 
    newBeersArray.forEach(beer => console.log(beer));
    

}

getBeers()