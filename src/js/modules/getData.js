const getData = data => {
    const results = data.results;
    const resultDetails = results.map(result => {
        const title = result.titles[0];
        const author = result.authors[0];
        const imageSmall = result.coverimages[0];
        const imageLarge = result.coverimages[1];
        const languages = result.languages;
        const publisher = result.publisher[0];
        return {title, author, imageSmall, imageLarge, languages, publisher}
    })
    return resultDetails
}

export {getData}