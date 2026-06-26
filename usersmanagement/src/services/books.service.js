const fs = require("fs");

function findAllBooks() {
  const data = fs.readFileSync("./src/db/books.json", "utf8");
  const books = JSON.parse(data);
  return books;
}

function findBookById(id) {
  const books = findAllBooks();
  for (const book of books) {
    if (book.id === id) {
      return book;
    } else {
      false;
    }
  }
}

function createBook(book) {
  const books = findAllBooks();
  books.push(book);
  fs.writeFileSync("src/db/books.json", JSON.stringify(books));
}

function updateBookById(id, book) {
  let books = findAllBooks();
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books[i] = book;
    }
  }
  fs.writeFileSync("src/db/books.json", JSON.stringify(books));
}


function deleteBookById(id) {
    let books = findAllBooks();
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
        }
    }
    fs.writeFileSync("src/db/books.json", JSON.stringify(books));
}


function processBooks(books, callback){
    for (const book of books) {
        callback(book);
    }
}

module.exports = {
    findAllBooks,
    findBookById,
    createBook,
    updateBookById,
    deleteBookById,
    processBooks
};
