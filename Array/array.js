'use strict';

const strArray = ['あ', 'い', 'う']

console.log(strArray.join('')); // 引数は区切り文字。初期値はカンマ
console.log(strArray.join('・'));

let array = [1, 2, 3]
console.log(array); // 配列

array.push(4); // 配列の末尾にアイテムを追加
console.log(array); // 1, 2, 3, 4

array.pop(); // 配列の末尾からアイテムを出す
console.log(array); // 1, 2, 3

array.unshift(0); // 配列の先頭にアイテムを追加する
console.log(array); // 0, 1, 2, 3

array.shift(); // 配列の先頭からアイテムを出す
console.log(array); // 1, 2, 3
