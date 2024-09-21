"use strict";
// Toteutetaan funktio, joka pyytää käyttäjältä kirjan tiedot
function promptForBook() {
    // Pyydetään käyttäjältä kirjan tiedot (käytetään prompt-ikkunoita selaimessa)
    const bookTitle = window.prompt("Enter the book title:") || "Unknown Title";
    const bookAuthor = window.prompt("Enter the author:") || "Unknown Author";
    const bookPublicationYear = parseInt(window.prompt("Enter the publication year:") || "0", 10);
    // Luodaan kirja-olio syötettyjen tietojen perusteella
    const book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear
    };
    return book;
}
// Kutsutaan funktiota ja saadaan kirjan tiedot
const bookDetails = promptForBook();
// Näytetään kirjan tiedot käyttäjälle
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
