const books =[
    {title: 'Book One', author: 'Author A',genre: 'Fiction', publish: 1996},
    {title: 'Book two', author: 'Author B',genre: 'comic', publish: 2006},
    {title: 'Book three', author: 'Author C',genre: 'Sci-Fi', publish: 2000},
    {title: 'Book four', author: 'Author D',genre: 'Biopic', publish: 2017},
    {title: 'Book five', author: 'Author E',genre: 'Fiction', publish: 2010},
    {title: 'Book six', author: 'Author F',genre: 'Sci-Fi', publish: 2015},
];

const booksWritten = books.filter((book)=> book.genre ==='Fiction');
const write = books.filter((book)=> book.publish >2000);
console.log(write);
console.log(booksWritten);