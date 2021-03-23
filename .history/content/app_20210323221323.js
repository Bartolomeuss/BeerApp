// variables:

const urlBase ="https://api.punkapi.com/v2/beers";
const filterABV = document.getElementById("filterABV");
const filterIBU = document.getElementById("filerIBU");
let optionsABV = "", optionsIBU = "";


filterABV.addEventListener("change", e =>{
    const value = e.target.value
    
    switch (value) {
        case "all":
            optionsABV = "";
            break
        case "weak":
            optionsABV = "abv_lt=4.6";
            break
        case "medium":
            optionsABV = "abv_gt=4.5&abv_lt=7.6";
            break
        case "strong":
            optionsABV = "abv_gt=7.5";
            break
    }

    getBeers();

})

filterIBU.addEventListener("change", e =>{
    const value = e.target.value;

    switch (value) {
        case "all":
            optionsIBU = "";
            break
        case "Weak":
            optionsIBU = "ibu_lt=35";
            break
        case "Medium":
            optionsIBU = "ibu_gt=34&ibu_lt=75"; 
            break
        case "Strong":
            optionsIBU =   "ibu_gt=74";   
            break

    }
    getBeers();

})



async function getBeers(){
    const url = urlBase + "?" + optionsABV 
    const promisedBeer = await fetch(url);
    const beerData = await promisedBeer.json(); 
    let html = "";
    const beers = document.querySelector('.beers');
    beerData.forEach(beer => {
        
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
            <div class="beer__content">
                <div class="beer__name">${beer.name}</div>
                <div class="beer__tagline">${beer.tagline}</div>
                <div class="beer__description">${beer.description}</div>
                <div class="beer__foodparing">
                    Pair with:  ${beer.food_pairing.join(', ')}
                </div>
            </div>
        </div>
        `;
        
        beers.innerHTML=html;
        
    });


}

getBeers()