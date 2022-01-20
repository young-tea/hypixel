import { readFileSync } from 'fs';

const rawdata = readFileSync('./crafts.json');
let crafts = JSON.parse(rawdata);

let treecapitator = crafts.items[0];
let recipe = treecapitator.recipe.summary;

console.log(recipe);

//this is fsile that calculates treecapitator craft price