'use strict';

const collection = document.getElementsByClassName('collection');
const nodelist = document.querySelectorAll('.collection');

console.log(collection);
console.log(nodelist);
console.log(document.getElementById('list'));
console.log(document.querySelector('#list'));

console.log(collection[0].parentElement); // <ul>
console.log(nodelist[0].parentElement); // <ul>

const collectionParent = collection[0].parentElement;

const addElement = document.createElement('li');
addElement.innerText = 'addElement';
addElement.className = 'collection';
