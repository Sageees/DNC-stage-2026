const fs = require("fs");
const UTILS = require('../utils.js');
const { findAllBooks } = require("./books.service.js");
const { findAllUsers } = require("./user.service.js");

function findAllBookings() {
  const data = fs.readFileSync("./src/db/users-booking.json", "utf8");
  const bookings = JSON.parse(data);
  return bookings;
}

function createBookingByBookId(book) {
  const books = findAllBooks();
  const bookings = findAllBookings();
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === book.bookId) {
      if (books[i].qta >= book.qta) {
        books[i].qta -= book.qta;
        fs.writeFileSync("src/db/books.json", JSON.stringify(books));
        const startDate = UTILS.getToday();
        const newBook = {
          id: crypto.randomUUID(),
          ...book,
          startDate: UTILS.getToday(),
          endDate: UTILS.addDay(startDate, 15),
          status: "PRESTITO",
        };
        bookings.push(newBook);
      } else {
        console.log("not enough books");
      }
    }
  }
  fs.writeFileSync(
    "src/db/users-booking.json",
    JSON.stringify(bookings, null, 2),
  );
}

function deleteBookingById(id) {
  let bookings = findAllBookings();
  let exist = false;
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === id) {
      exist = true;
      bookings.splice(i, 1);
    }
  }
  if (!exist) {
    const e = new Error("booking Not Found");
    throw e;
    // throw new Error('booking Not Found')
  }
  fs.writeFileSync("src/db/users-booking.json", JSON.stringify(bookings));
}

function updateBookingById(id, booking) {
  let bookings = findAllBookings();
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === id) {
      bookings[i] = booking;
    }
  }
  fs.writeFileSync("src/db/users-booking.json", JSON.stringify(bookings));
}


function findBookingById(id) {
  const bookings = findAllBookings();
  for (const booking of bookings) {
    if (booking.id === id) {
      return booking;
    } else {
      console.log("Booking not found");
    }
  }
}

module.exports = {
  createBookingByBookId,
  findBookingById,
  updateBookingById,
  deleteBookingById,
  findAllBookings,
};