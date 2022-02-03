//importing crafts and bz data
import crafts from './fetch-crafts.js'
import BZproducts from './bz-data.js'

//getting treecapitator recipe
let jungleAxe = crafts.items[1];
let recipe = jungleAxe.recipe;

//getting how much jungle wood we need
let jungleWood = recipe[1];
let jungleWoodNum = jungleWood.ENCHANTED_JUNGLE_LOG;

//getting obsidian price
let jungleWoodBZ = BZproducts.ENCHANTED_JUNGLE_LOG.quick_status;
let jungleWoodPrice = Math.round(jungleWoodBZ.sellPrice);

//calculating price of obsidian for craft
let jungleAxePrice = jungleWoodNum * jungleWoodPrice;

//exporting craft price
export default jungleAxePrice;

//this is file that calculates jungle axe craft price