// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = window.prompt('Syötä brändi') /* TODO: Get user input for brand */;
    const model = window.prompt('Syötä malli') /* TODO: Get user input for model */;
    // TODO: return object containing brand and model
    return {
        type: 'electronic',
        brand: brand,
        model: model,
    };
}
;
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = window.prompt('Syötä kirjan nimi') /* TODO: Get user input for title */;
    const author = window.prompt('Syötä kirjoittaja') /* TODO: Get user input for author */;
    // TODO: return object containing title and author
    return {
        type: 'book',
        title: title,
        author: author,
    };
}
;
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
