let books = [];

let book1 = {
  title: "Fight Fight Fight!",
  authorName: "Donald J. Trump",
  releaseYear: 2024
};

let book2 = {
  title: "Understanding Deep Learning",
  authorName: "David J. Prince",
  releaseYear: 2023
};

let book3 = {
  title: "L'art d'aimer",
  authorName: "Henry Bayemi",
  releaseYear: 2020
};

let book4 = {
  title: "Thinking Like a Computer Scientist",
  authorName: "Peter Wenthworth",
  releaseYear: 2010
};

let book5 = {
  title: "Think Big",
  authorName: "Big Thinker",
  releaseYear: 1955
};

let book6 = {
  title: "The Great Adventure",
  authorName: "Christopher Columbus",
  releaseYear: 1940
};

books.push(book1, book2, book3, book4, book5, book6);

// Sort books by release year
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
}

// Filter books released after a given year
function filterBy(year, books) {
  let filteredBooks = [];
  for (let book of books) {
    if (book.releaseYear > year) {
      filteredBooks.push(book);
    }
  }
  return filteredBooks;
}

// Apply sort and filter
books.sort(sortByYear);
console.log("All books sorted by year:", books);

const filteredBooks = filterBy(1950, books);
console.log("Books released after 1950:", filteredBooks);


filteredBooks.sort(sortByYear);


