// Object of protos

const bookProtos = {
    getSummary: function() {
        `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear - this.year;
        return `${this.title} is ${years} old`;
    }
}

// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1';
// book1.author = 'John Doe';
// book1.year = '2013';

// console.log(book1);

const book1 = Object.create(bookProtos, {
    title: {value: 'Book 1'},
    author: {value: 'John Doe'},
    year: {value:'2013'}
});

console.log(book1);
