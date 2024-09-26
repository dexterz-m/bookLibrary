
var overlay = document.getElementById('popUpContainer');


function popUpForm(){
  overlay.classList.remove('hide');
  overlay.classList.add('show');
}

function closeForm(){
  overlay.classList.remove('show');
  overlay.classList.add('hide');

}


const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.sayInfo = function() {
      console.log(this.name, this.author, this.pages, this.read);
    }
}

function addBookToLibrary() {
  // do stuff here
}
