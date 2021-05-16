'use strict';

// インスペクター成形用
function line() {
  return console.log('----------');
}

function space() {
  return console.log(' ');
}

// String - 文字列
const string = 'オヨ～';
console.log(string + ' in string is ' + typeof string); // オヨ～ in string is string

line();


// Number - 数値型
const integer = 123;
console.log(integer + ' in integer is ' + typeof integer); // 123 in integer is number

const float = 0.123;
console.log(float + ' in float is ' + typeof float); // 0.123 in float is number

// JavaScriptでは整数か小数かを気にする必要はない
line();


// Boolean - ブール型
const boolTrue = true;
const boolFalse = false;

console.log(boolTrue + ' in boolTrue is ' + typeof boolTrue); // true in boolTrue is boolean
console.log(boolFalse + ' in boolFalse is ' + typeof boolFalse); // false in boolFalse is boolean

line();


// Null - ヌル型
const nullNull = null;

console.log(nullNull + ' in nullNull is ' + typeof nullNull); // null in nullNull is object

line();


// undefinded - 未定義型
let undefinedtype;

console.log('undefinedtype is only declare. so ' + typeof undefinedtype); // undefinedtype is only declare. so undefined

// constで宣言するとエラーになる。

line();


console.log('addTest');

space();

console.log(typeof string + ' + ' + typeof integer);
console.log(typeof (string + integer));

// string + number
// string

space();

console.log(typeof string + ' + ' + typeof boolTrue);
console.log(typeof (string + boolTrue));
console.log(string + boolTrue);

// string + boolean
// string
// オヨ～true
