class Book {
  constructor(pages, genre, title, author, datePublished, price) {
    this.pages = pages;
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.datePublished = datePublished;
    this.price = price;
    this.bookmark = 0;
    this.copiesOwned = 0;
  }
  nextPage() {
    if (this.bookmark == this.pages) {
      console.log("You are at the end of the book!");
    } else {
      this.bookmark++;
      console.log("You have flipped to page", this.bookmark);
    }
  }
  prevPage() {
    if (this.bookmark == 0) {
      console.log("You are at the start of the book!");
    } else {
      this.bookmark--;
      console.log("You have flipped to page", this.bookmark);
    }
  }
  bookAge() {
    let now = new Date();
    let published = new Date(this.datePublished);
    let elasped = now - published;
    let daysSincePublished = Math.floor(elasped / (1000 * 3600 * 24));
    return daysSincePublished;
  }
  purchaseBook(money) {
    if (money < this.price) {
      console.log("This is not enough money");
    } else {
      let change = money - this.price;
      console.log(
        "You have successfully purchase the book:",
        this.title + ". Here is",
        change,
        "dollars worth of change."
      );
      this.copiesOwned++;
    }
  }
}

export default Book;
