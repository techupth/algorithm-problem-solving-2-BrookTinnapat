function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let index in books) {
    // console.log(books[index].title);
    if (books[index].title === searchTitle) {
      return index;
    }
  }
  return -1;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];
const searchTitle1 = "Gone with the Wind";
const searchTitle2 = "The Master Mind";

console.log(findBookIndex(books, searchTitle1));
console.log(findBookIndex(books, searchTitle2));
