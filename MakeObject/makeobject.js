'use strict';

// from MDN
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Bookクラス。
/**
 * [Book description]
 */
class Book {

  /**
   * Book constructor
   * @param {string} title  タイトル
   * @param {number} price  値段
   * @param {string} author 著者
   */
  constructor(title, price, author) {
    this.title = title;
    this.price = price;
    this.author = author;
  }

  /**
   * 本のタイトルと著者を文字列で返す。
   * @return {string} タイトルと著者を連結して返す
   */
  lookinfo() {
    const booktitle = 'タイトル : ' + this.title;
    const  bookauthor = '著者 : ' + this.author;
    const bookinfo = booktitle + ' ' + bookauthor;
    return bookinfo;
  };
}

const javaScriptBook = new Book('javaScriptBook', 2000, 'me');
const typeScriptBook = new Book('typeScriptBook', 3000, 'me');

console.log(javaScriptBook);
console.log(typeScriptBook);

console.log(javaScriptBook.lookinfo());
