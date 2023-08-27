/***********************
 * Filename: ComplexCode.js
 * Description: This JavaScript code represents a complex and sophisticated application for managing a library system.
 * It consists of various classes and functionalities to handle books, authors, patrons, and borrowing/returning processes.
 ************************/

// Book Class representing a book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Method to get the book's details
  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}

// Author Class representing an author
class Author {
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;
  }
}

// Patron Class representing a library patron
class Patron {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.booksBorrowed = [];
  }

  // Method to borrow a book
  borrowBook(book) {
    this.booksBorrowed.push(book);
    console.log(`Book '${book.title}' borrowed successfully by ${this.name}.`);
  }

  // Method to return a book
  returnBook(book) {
    const index = this.booksBorrowed.indexOf(book);
    if (index !== -1) {
      this.booksBorrowed.splice(index, 1);
      console.log(`Book '${book.title}' returned successfully by ${this.name}.`);
    } else {
      console.log(`You have not borrowed '${book.title}'.`);
    }
  }

  // Method to display the books currently borrowed
  displayBorrowedBooks() {
    console.log(`${this.name} has borrowed the following books:`);
    for (let book of this.booksBorrowed) {
      console.log(`- ${book.getDetails()}`);
    }
  }
}

// Library Class representing a library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.authors = [];
    this.patrons = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Book '${book.title}' added to library.`);
  }

  // Method to add an author to the library
  addAuthor(author) {
    this.authors.push(author);
    console.log(`Author '${author.name}' added to library.`);
  }

  // Method to add a patron to the library
  addPatron(patron) {
    this.patrons.push(patron);
    console.log(`Patron '${patron.name}' added to library.`);
  }

  // Method to display all books in the library
  displayBooks() {
    console.log(`Books available in ${this.name}:`);
    for (let book of this.books) {
      console.log(`- ${book.getDetails()}`);
    }
  }

  // Method to display all authors in the library
  displayAuthors() {
    console.log(`Authors available in ${this.name}:`);
    for (let author of this.authors) {
      console.log(`- ${author.name}`);
    }
  }

  // Method to display all patrons in the library
  displayPatrons() {
    console.log(`Patrons registered in ${this.name}:`);
    for (let patron of this.patrons) {
      console.log(`- ${patron.name}`);
    }
  }
}

// Creating instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

const author1 = new Author("F. Scott Fitzgerald", "American");
const author2 = new Author("Harper Lee", "American");
const author3 = new Author("George Orwell", "British");

const patron1 = new Patron("John Doe", 25);
const patron2 = new Patron("Jane Smith", 32);

const library = new Library("My Library");

// Adding books, authors, and patrons to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.addAuthor(author1);
library.addAuthor(author2);
library.addAuthor(author3);

library.addPatron(patron1);
library.addPatron(patron2);

// Borrowing and returning books
patron1.borrowBook(book1);
patron1.borrowBook(book2);
patron1.displayBorrowedBooks();

patron2.borrowBook(book2);
patron2.returnBook(book2);
patron2.borrowBook(book3);
patron2.displayBorrowedBooks();

// Displaying library content
library.displayBooks();
library.displayAuthors();
library.displayPatrons();