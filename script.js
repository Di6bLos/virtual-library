/* eslint-disable no-unused-expressions */

// DOM elements

const myLibrary = [];

// Constructor function for creating a new Book
function Book(title, author, numPages, readBook) {
  this.title = title,
  this.author = author,
  this.numPages = numPages,
  this.readBook = readBook;
}

const redHood = new Book('Red riding Hood', 'Grimm', 3, true);

// Function that adds the new Book to myLibrary array
const addBook = (newBook) => {
  myLibrary.push(newBook);
};

console.log(addBook(redHood));

console.log(myLibrary);
