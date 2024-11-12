/**
 * 使用一个count属性来记录栈中的元素个数
 */


class Stack {
  constructor() {
    this.count = 0;
    this.items = {};//用对象来存储栈中的元素
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  //由于没有使用数组来存储数据，需要手动实现删除
  pop() {
    if(this.isEmpty()) {
      return undefined;
    }
    console.log(this);
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
    /**
     * while(!this.isEmpty()) {
      this.pop();
     }
     */
  }
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}


