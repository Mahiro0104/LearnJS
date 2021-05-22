# コールバック関数とは

コールバック関数に関してのメモです。

## TL;DR
- 引数として渡される関数のこと。
- Arr.forEach("ここに記述する関数のこと");
- console.log("ここに関数を書いた場合、これもコールバック関数");

## 具体例
Arr.forEach("この中に記述する関数のこと");
```nodeList.js
// NodeListを形成する.nodeを取得。
const nodeList = document.querySelectorAll('.node');

// forEachメソッドでコンソールに各種アイテムの表示。
nodeList.forEach(function(node){
  console.log(node);
  });
```

```console.js
// 値を足して返す関数を作成しておく
function Add(numA, numB){
  return numA + numB;
}

// logメソッドの引数Add関数は、コールバック関数
console.log(Add(1,2));
```
