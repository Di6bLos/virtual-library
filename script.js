const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const yearInput = document.getElementById('year-input');
const readInput = document.getElementById('read-input');
const resetBtn = document.getElementById('reset-btn');

const library = [];

// Constructor function to create a new book
function Book(title, author, year, read) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.read = read
}

bookForm.addEventListener('submit', (e)=> {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const read = readInput.value;


    const newBook = new Book(title, author, year, read);
    library.push(newBook);
    e.preventDefault();
    resetBtn.click();
})



