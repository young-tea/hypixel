//importing crafts, jungle axe price and bz data
import crafts from './fetch-crafts.js'
import jungleAxePrice from './jungle-axe.js'
import BZproducts from './bz-data.js'

//getting treecapitator recipe
let treecapitator = crafts.items[0];
let recipe = treecapitator.recipe;

//getting how much obsidian we need
let obsidian = recipe[1];
let obsidianNum = obsidian.ENCHANTED_OBSIDIAN;

//getting obsidian price
let obsidianBZ = BZproducts.ENCHANTED_OBSIDIAN.quick_status;
let obsidianPrice = Math.round(obsidianBZ.sellPrice);

//calculating price of obsidian for craft
let allObsidianPrice = obsidianNum * obsidianPrice;

//calculating craft price
let treecapitatorPrice = allObsidianPrice + jungleAxePrice;

//exporting craft price
export default treecapitatorPrice;

//this is fsile that calculates treecapitator craft price