import Book from "./Book.js";

const bookOne = new Book(
  100,
  "Mystery",
  "The Strange Book",
  "Berry Liu",
  "December 5, 2019 15:00:00 EST",
  12.0
);

console.log(bookOne.title);
bookOne.prevPage();
bookOne.nextPage();
bookOne.bookAge();
bookOne.purchaseBook(100);
bookOne.purchaseBook(1);
bookOne.purchaseBook(50);
console.log(bookOne.copiesOwned);
