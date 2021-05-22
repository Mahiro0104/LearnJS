'use strict';

const animal = document.querySelectorAll('.animal');

animal.forEach(animals => {
  animals.getElementsByTagName('p')[0].textContent = '犬';
  console.log(animals.getElementsByTagName('p')[0]);
});
