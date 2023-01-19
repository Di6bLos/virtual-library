

// DOM objects
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const yearInput = document.getElementById('year-input');
const readInput = document.getElementById('read-input');
const resetBtn = document.getElementById('reset-btn');
const cardContainer = document.getElementById('card-container');

// Array that will store the books created in the form
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
        // Creates a div that wraps around the content
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        cardContainer.appendChild(bookCard);
        // Title of the book
        const bookTitle = document.createElement('h3');
        bookTitle.innerHTML = library[i].title;
        bookCard.appendChild(bookTitle);
        // Author of the book
        const bookAuthor = document.createElement('p');
        bookAuthor.innerHTML = library[i].author;
        bookCard.appendChild(bookAuthor);
        // Year it was published
        const bookYear = document.createElement('p');
        bookYear.innerHTML = library[i].year;
        bookCard.appendChild(bookYear);
        // A checkbox for if it has been read or not
        const bookReadLabel = document.createElement('label');
        const bookReadCheckBox = document.createElement('input');
        bookReadLabel.innerHTML = 'Read Book?';
        bookReadCheckBox.setAttribute('type', 'checkbox');
        bookReadCheckBox.value = library[i].read;
        bookCard.appendChild(bookReadLabel);
        bookCard.appendChild(bookReadCheckBox);

        
        


    }

}

// Listens for the submit button on the form to be clicked.
// Then creates a new book and pushes it to the library array.
bookForm.addEventListener('submit', (e)=> {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const read = readInput.value;

    // Uses the 'Book' constructor function to create a new book object based on the input values
    const newBook = new Book(title, author, year, read);
    library.push(newBook);
    e.preventDefault();
    resetBtn.click();

    printBooks();
})



