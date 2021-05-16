'use strict';

const string = 'オヨ～';
const number = 123;

if (typeof string === String) {
  console.log('string === string');
}
else {
  console.log('string != string');
}

const typeOfString = typeof string;

console.log(typeOfString);
