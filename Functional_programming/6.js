// Refactor Global Variables Out of Functions

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(originalBookList, bookName) {
  const bookList = originalBookList.slice();
  bookList.push(bookName);
  return bookList;
}

function remove(originalBookList, bookName) {
  const bookList = originalBookList.slice();
  const book_index = bookList.indexOf(bookName);

  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;
    }
}
