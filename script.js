const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const yearInput = document.getElementById('year-input');
const readInput = document.getElementById('read-input');
const resetBtn = document.getElementById('reset-btn');
const cardContainer = document.getElementById('card-container');

const library = [];

// Constructor function to create a new book
function Book(title, author, year, read) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.read = read
}

// Iterates over the library array,
// and creates a DOM element for each book object in the array
const printBooks = () => {
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < library.length; i++) {
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('h3');
        bookTitle.innerHTML = library[i].title;
        bookCard.appendChild(bookTitle);
        cardContainer.appendChild(bookCard);
        


    }

}

// Listens for the submit button on the form to be clicked.
// Then creates a new book and pushes it to the library array.
bookForm.addEventListener('submit', (e)=> {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const read = readInput.value;


    const newBook = new Book(title, author, year, read);
    library.push(newBook);
    e.preventDefault();
    resetBtn.click();

    printBooks();
})



