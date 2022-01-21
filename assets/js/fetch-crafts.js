//importing file system
import { readFileSync } from 'fs';

//getting crafts
const rawdata = readFileSync('./crafts.json');
let crafts = JSON.parse(rawdata);

//exporting ctafts
export default crafts;

//this file is fetching crafts and exporting it