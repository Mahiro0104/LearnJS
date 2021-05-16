'use strict';

/**
 * 10コのアイテムを格納出来る疑似キュー配列。
 *
 *
 */
class Queue {
  /**
   * キューとしての配列を生成。
   *
   * index      ...先頭。次にアイテムが出るポインタ
   * lastIndex　...末尾。次にアイテムが入るポインタ
   * size       ...最大10のキューにいくつアイテムが入っているか。
   */
  constructor(){
    this.queueArray = [];
    this.index = 0;
    this.lastIndex = 0;
    this.size = 0;
  }

  /**
   * キューにアイテムを追加。
   *
   * @param  {string} item キューに追加する要素。
   * @return {string}      キューにつ追加したアイテムを表示。
   */
  enQueue(item) {
    const enQueueItem = item;

    this.queueArray.push(enQueueItem); // ここだけArrayオブジェクトのメソッドを使用
    this.lastIndex += 1; // pushメソッドを使っているのでほとんどイメージだけど、ポインタを1つ増やす
    this.size += 1; // 現在のアイテム数を1つ増やす

    if (this.size === 11) {
      this.index += 1; // 11コ目のアイテムが入ったとき、indexポインタを1つ増やすことで先頭のアイテムを疑似キューの範囲外に出し、FIFOっぽい処理をする
      this.size -= 1; // 疑似キューの範囲外にアイテムを1つ出したので、サイズも1つ減らして10に
    }

    return console.log(`キューに "${enQueueItem}" を追加しました。`); // 追加したアイテムの表示
  }

  /**
   * キューからアイテムを出す。
   *
   * @return {string} キューから出したアイテムを表示。
   */
  deQueue() {
    if (this.size != 0) {
      const deQueueItem = this.queueArray[this.index]; // indexポインタより次に出るアイテムを変数に
      this.index += 1; // shiftメソッドを使用しない代わりに、indexポインタを1つ増やすことで先頭のアイテムを疑似キューの範囲外に
      this.size -= 1; // アイテムを出したのでサイズを減らす

      return console.log(`キューから "${deQueueItem}" を出しました。`); // 出したアイテムの表示
    }
    else{
      return console.log('キューの中には何も入っていません。'); // 出すアイテムがない時に
    }
  }

  /**
   * キューの大きさとそれぞれに入っているアイテムを表示。
   *
   * @return {string} キューの大きさとアイテムを表示。
   */
  altSize() {
    return console.log(`現在のキューのサイズは${this.size}/10 です。中身は${itemOfQueue(this.queueArray, this.index, this.lastIndex)}です`);

    function itemOfQueue(queueArray, index, lastIndex) {
      let messageArray = [];

      if (index === lastIndex) {
        messageArray.push('空'); // indexポインタとlastIndexポインタが同じとき、アイテムは空なので
      }
      else {
        for (let i = index; i < lastIndex; i++) {
          messageArray.push(queueArray[(i)] + '、'); // 疑似キューの先頭から末尾までアイテムを一つ一つ出してメッセージ配列に入れる。・
        }
      }

      return messageArray.join(''); // 配列を文字列に結合して表示
    }
  }

  /**
   * キュー風配列の本当の大きさを表示。
   *
   * @return {string} キュー風配列の大きさ
   */
  realSize() {
    return console.log(`キューオブジェクト内の配列の本当の長さは${this.queueArray.length}です。`); // 疑似キュー配列の本当の長さを表示
  }
}
