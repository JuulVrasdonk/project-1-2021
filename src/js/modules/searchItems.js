import * as variables from "./variables.js";
import {getData} from "./getData.js"
import { showResults } from "./showResults.js";

const searchItems = () => {
    fetch(`${variables.URL}${variables.searchBar.value}&authorization=1e19898c87464e239192c8bfe422f280&refine=true&output=json`)
        .then(response => response.json())
        .then(getData)
        .then(showResults)
}

export{searchItems}