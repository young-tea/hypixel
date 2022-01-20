//importing modules
import fetch from 'node-fetch';

//variables
const apiLink = 'https://api.hypixel.net/skyblock/bazaar?key=0aee2aa1-ea5f-48cf-992b-cd4672fd6351';

//function that is fetching bazaar data
async function fetchBZ(apiLink) {
    const response = await fetch(apiLink);
    const data = await response.json();

    return(data)
};

//bazaar data
const BZdata = await fetchBZ(apiLink);
const BZproducts = BZdata.products;

//exporting bazaar data
export default BZproducts;

//this is file that fetches data from bazaar