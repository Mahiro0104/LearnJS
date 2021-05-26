'use strict';

let nodeList = document.querySelectorAll('.list');

// この時点では使い物にできないnodeListでしかない。
console.log(nodeList);

// 当たり前かもしれないけど、itemまで絞れば中身を好きに参照できる。
console.log(nodeList[0].dataset.id); // 1
console.log(nodeList[0].getElementsByClassName('class1'));  // もう一度HTMLコレクションを取得出来る。
console.log(nodeList[0].querySelectorAll('.class1')); // もう一度nodeListが取得出来る。

// つまり

nodeList.forEach(listBlock => console.log(listBlock)); // これで1つのアイテムをelementとして扱える。

// 長くなるのでfunction式で
// まず、配列的にしまわれているアイテムをforEachで一つずつ出す
nodeList.forEach(function(listBlock){

  // 次に、取り出したnode内を更に探索し、nodeを取得する。
  let class1 = listBlock.querySelector('.class1');
  let class2 = listBlock.querySelector('.class2');
  let class3 = listBlock.querySelector('.class3');

  // 一意のノードに対してそれぞれの編集を行う。
  // datasetで可能だったので、ここに取得したjsonデータを指定すれば、目的のデータをhtmlに表示させることが出来る。
  class1.textContent = 'クラス1' + listBlock.dataset.id;
  class2.textContent = 'クラス2' + listBlock.dataset.id;
  if(class3 != null){
    class3.textContent = 'クラス3' + listBlock.dataset.id;
  }
  else {
    console.log('nullpo');
  }

  console.log(class1);
  console.log(class2);
  console.log(class3);
});
