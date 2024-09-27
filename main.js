
const overlay = document.getElementById('popUpContainer');
const closeButton = document.getElementById('popUpCloseButton')
let forms = document.querySelectorAll('input');

// Open and close overlay to add book

function popUpForm(){
  overlay.classList.remove('hide');
  overlay.classList.add('show');
}

function closeForm(){
  overlay.classList.remove('show');
  overlay.classList.add('hide');
}

// Clear all form input

closeButton.addEventListener('click', () => {
  forms.forEach(form => form.value = '');
})

// Content

const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
  // do stuff here
}
