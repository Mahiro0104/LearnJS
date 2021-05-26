'use strict';

// 全てのリクエストを取得し、NodeListへ
const requestList = document.querySelectorAll('.request');

// 全てのリクエストに対して関数を実行
// ここはカプセル化したい
requestList.forEach(function(itemElement){
  // キーを取得し、フィールドに保存
  const idField = itemElement.dataset.id;

  // 出力する場所を取得
  const child1 = itemElement.querySelector('.child1');
  const child2 = itemElement.querySelector('.child2');

  // 出力場所が複数合っても対応出来るようにquerySelectorAllへ。
  const children3 = itemElement.querySelectorAll('.child3');

  // forEachメソッドで、一つ一つ処理。
  children3.forEach(function(child3){
    $.getJSON('data.json',function(jsonObject){
      // このタイトルのレコードを格納する
      const record = jsonObject[idField];

      // レコードからデータを取得し、対応する場所に出力する
      child3.textContent = record["title"];
    });
  });

  // jsonからタイトルのデータをまとめて取得し、変数jsonObjectに代入
  // getJSONメソッドはjquery本体がある位置からのディレクトリを指定
  $.getJSON('data.json', function(jsonObject){
    // これで1レコード分のオブジェクトが閲覧出来るはず。
    console.log(jsonObject[idField]);

    // このタイトルのレコードを格納する
    const record = jsonObject[idField];

    // レコードからデータを取得し、対応する場所に出力する
    // child1.textContent = record["child1"]
    // child2.textContent = record["child2"]
    child1.textContent = record["title"];
    child2.textContent = record["credit"];
  });
});
