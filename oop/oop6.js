class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes and Noble';
    }
}

// Instantiate Object

const book1 = new Book('Book 1', 'John Doe', '2013');
console.log(book1);
book1.revise('2018');
console.log(book1);

const book2 = new Book('Book 2', 'Jane Doe', '2015');
console.log(book2);

// book1.topBookStore()    //error

console.log(Book.topBookStore());

