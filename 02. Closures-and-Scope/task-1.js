'use strict';

function solve() {
    var library = (function() {
        var books = [];
        var categories = [];

        function listBooks(obj) {
            if (obj !== undefined) {
                if (obj.hasOwnProperty('category')) {
                    return books.filter(b => b.category === obj.category);
                } else if (obj.hasOwnProperty('author')) {
                    return books.filter(b => b.author === obj.author);
                }
            }

            return books;
        }

        function addBook(book) {

            // validate title
            if (book.title.length < 2 || book.title.length > 100) {
                throw "Invalid book title length!";
            }

            //validate isbn 
            let isbnStr = book.isbn.toString();

            if (isbnStr.length !== 10 && isbnStr.length !== 13) {
                throw "invalid isbn";
            }

            for (let i = 0; i < isbnStr.length; i += 1) {
                let converted = Number(isbnStr[i]);
                if (Number.isNaN(converted)) {
                    throw "Invalid isbn";
                }
            }

            // validate author
            if (book.author.length === 0 || book.author === '') {
                throw "invalid author";
            }

            // check for duplications in titles and isbn
            if (books.some(b => b.isbn === book.isbn)) {
                throw "Duplication of isbn";
            }

            if (books.some(b => b.title === book.title)) {
                throw "Duplication of title";
            }

            // check if category already exists
            if (categories.indexOf(book.category) < 0) {
                categories.push(book.category);
            }

            book.ID = books.length + 1;
            books.push(book);
            return book;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}
module.exports = solve;
