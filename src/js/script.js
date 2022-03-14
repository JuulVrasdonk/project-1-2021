import * as variables from "./modules/variables.js";
import { searchItems } from "./modules/searchItems.js";
variables.form.addEventListener('submit', event => {
    event.preventDefault();
    searchItems()
})
