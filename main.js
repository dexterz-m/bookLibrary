const overlay = document.getElementById('popUpContainer');
const closeButton = document.getElementById('popUpCloseButton')
const Library = document.getElementById('library');

// Open and close overlay to add book

function popUpForm(){
  overlay.classList.remove('hide');
  overlay.classList.add('show');
}

function closeForm(){
  overlay.classList.remove('show');
  overlay.classList.add('hide');
  clearForm();
}

// Clear all form input

function clearForm(){
  const forms = document.querySelectorAll('.form-input');
  forms.forEach(form => form.value = '');

  const checkBox = document.querySelector('.form-checkbox')
  checkBox.checked = false
}

// Toggle READ/UNREAD

function toggleRead(){

}

// Remove book from Display

function removeBook(){

}

// Content

const myLibrary = [];

function Book() {
    Library.innerHTML = '';

    myLibrary.forEach(bookinfo => {

      const bookDiv = document.createElement('div');
      bookDiv.className = 'bookDiv';
    
      bookDiv.innerHTML = `
          <h3 id="bookName">"${bookinfo.name}"</h3>
          <p id="bookAuthor"> ${bookinfo.author}</p>
          <p id="bookPages">${bookinfo.pages} pages</p>
          <button class="bookDisplayButton" id="readButton" onClick="toggleRead()"> ${bookinfo.read} </button>
          <button class="bookDisplayButton" id="removeButton" onClick="removeBook()">Remove</button>
      `;
    
      Library.appendChild(bookDiv);
    });


}

function addBookToLibrary() {

  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

    bookInfo = {
      name : name,
      author : author,
      pages : pages,
      read : read
    };

    myLibrary.push(bookInfo)
    closeForm()
    Book()
    
}
