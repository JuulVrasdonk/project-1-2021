import * as variables from "./variables.js";

const showResults = resultDetails => {
    console.log(resultDetails);
    resultDetails.forEach(result => {
        const itemTemplate = `
        <ul>
            <img src="${result.imageSmall}" alt="${result.title}">
            <h2>${result.title}</h2>
            <p>Auteur: ${result.author}</p>
        </ul>
        `;
        variables.list.insertAdjacentHTML('beforeend', itemTemplate);
    });
}

export {showResults}