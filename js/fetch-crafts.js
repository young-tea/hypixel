//importing modules
import fetch from 'node-fetch';

//variables
const apiLink = 'https://young-tea.github.io/hypixel-crafts-api/crafts.json';

//function that is fetching bazaar data
async function fetchBZ(apiLink) {
    const response = await fetch(apiLink);
    const data = await response.json();

    return(data)
};

//bazaar data
const crafts = await fetchBZ(apiLink);

//exporting bazaar data
export default crafts;

//this is file that fetches data from bazaar