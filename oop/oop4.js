//Constructor
function Book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year;
}

// getSummary

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag 1', 'John Doe', '2013', 'Jan');

Magazine.prototype.constructor = Magazine;

console.log(mag1);

console.log(mag1.getSummary());

