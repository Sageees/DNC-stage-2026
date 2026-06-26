const crypto = require("crypto");
const express = require("express");
console.log(express)
const app = express();
const port = 3000;
const userService = require("./services/user.service.js");
const { findAllBooks, findBookById, deleteBookById, createBook, updateBookById } = require("./services/books.service.js");
const { createBookingByBookId, findBookingById, updateBookingById, deleteBookingById, findAllBookings } = require("./services/users-book.service.js");
app.use(express.json());

app.get("/users", (req, res) => {
  const user = findAllUsers();
  res.send(user);
});

app.get("/users/:userId", (req, res) => {
  // const {userId} = req.params;
  const userId = req.params.userId
  console.log(userId)
  const user = userService.findUserById(userId);
  console.log()
  res.send(user);
});

app.delete("/users/:id", (req,res) => {
  const userId = req.params.id;
  userService.deleteUserById(userId);
  res.sendStatus(204);
});

app.post("/users", (req,res) =>{
  userService.createUser(req.body);
  res.sendStatus(204);
});

app.patch("/users/:id", (req,res) => {
  userService.updateUserById(req.params.id, req.body);
  res.sendStatus(204);
})

app.get("/books", (req, res) => {
  const book = findAllBooks();
  res.send(book);
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log(bookId);
  const book = findBookById(bookId);
  res.send(book);    
});

app.delete("/books/:id", (req,res) => {
  const bookId = req.params.id;
  deleteBookById(bookId);
  res.sendStatus(204);
});
app.post("/books", (req,res) =>{
  createBook(req.body);
  res.sendStatus(204);
});

app.patch("/books/:id", (req,res) => {
  updateBookById(req.params.id, req.body);
  res.sendStatus(204);
})

app.get("/bookings", (req, res) => {
  const booking = findAllBookings();
  res.send(booking);
});

app.get("/bookings/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const booking =  findBookingById(id);
  res.send(booking);
});
app.delete("/bookings/:id", (req,res) => {
  const id = req.params.id;
  try {
    deleteBookingById(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send(error.message)
  }
});
app.post("/bookings", (req,res) =>{
  createBookingByBookId(req.body);
  res.sendStatus(204);
});

app.patch("/bookings/:id", (req,res) => {
  updateBookingById(req.params.id, req.body);
  res.sendStatus(204);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});