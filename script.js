//Library array
const myLibrary = [];

// Constructor
function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  // this.infoBook = function(){
  // let readingStatus = this.hasRead ? "read" : "not read yet";
  //  return readingStatus;
  //  }
}

const addBookButton = document.getElementById("new-book-btn"); //accessing the add a new book button
const addBookForm = document.getElementById("addBookForm"); // accessing the input form

// adding EventListener
addBookButton.addEventListener("click", function () {
  addBookForm.style.display = "block";
});

//adding EventListener on submit button of the form
addBookForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  // accessing all inputs from the form
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const hasRead = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, hasRead); // creating a new Book object
  myLibrary.push(newBook); // pushing in the Library array
  displayBookList(); // calling the function to render the list

  addBookForm.reset(); // Resetting the form after retrieving all the inputs
  addBookForm.style.display = "none"; // And again blocking the display of form
});

// Function to render list of books on the webpage
function displayBookList() {
  const bookList = document.getElementById("bookList"); // accessing the container of book list
  bookList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookCard = document.createElement("div"); // creating div for book card

    // Adding text content to the book card
    bookCard.innerHTML = `<div class = "cardDetails">
         <h3>${book.title}</h3>
         <p><strong>Author:</strong> ${book.author}</p>
         <p><strong>No. of pages:</strong> ${book.pages}</p>
         <p><strong>Status:</strong> ${
           book.hasRead ? "Read" : "Not read yet"
         }</p>
         </div>`;

    bookList.appendChild(bookCard); // adding book card to book list container

    // adding remove book button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", function () {
      removeBook(i);
    });

    // adding toggle read status button
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = "Toggle Read Status";
    toggleReadBtn.addEventListener("click", function () {
      toggleReadStatus(i);
    });

    // appending these buttons to the book card
    bookCard.appendChild(removeBtn);
    bookCard.appendChild(toggleReadBtn);
  }
}

// function for the remove book button
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBookList();
}

// function for the toggle read staus button
function toggleReadStatus(index) {
  myLibrary[index].hasRead = !myLibrary[index].hasRead;
  displayBookList();
}

// Adding some default books for display
const defaultBook1 = new Book("The Alchemist", "Paulo Coelho", 224, false);
const defaultBook2 = new Book("1984", "George Orwell", 328, false);
const defaultBook3 = new Book("Frankenstein", "Mary Shelley", 416, true);
myLibrary.push(defaultBook1);
myLibrary.push(defaultBook2);
myLibrary.push(defaultBook3);
displayBookList();
