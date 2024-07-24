function popUpForm(){
  const overlay = document.getElementById('popUpContainer');
  overlay.classList.toggle('show');
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
