//importing modules
import fetch from 'node-fetch';

//variables
const apiLink = 'http://moulberry.codes/lowestbin.json';

//function that is fetching bazaar data
async function fetchAH(apiLink) {
    const response = await fetch(apiLink);
    const data = await response.json();

    return(data)
};

//bazaar data
const BINdata = await fetchAH(apiLink);

//exporting auction hous lowest BINS
export default BINdata;

//this is file that fetches data from auction house