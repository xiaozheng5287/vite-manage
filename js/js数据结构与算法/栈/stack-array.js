class Stack {
  constructor() {
    this.items = [];//需要一种数据结构来保存栈里的元素
  }
  //push方法只添加元素到栈顶，也就是栈的末尾
  push(element) {
    this.items.push(element);
  }
  //pop方法移除栈顶的元素，即最后添加进去的元素，并返回被移除的元素
  pop() {
    return this.items.pop();
  }
  //peek方法返回栈顶的元素，找出最后添加的元素
  peek() {
    return this.items[this.items.length - 1];
  }
  //isEmpty方法检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  //类似于length属性，size方法返回栈里的元素个数
  size() {
    return this.items.length;
  }
  //清空栈元素
  clear() {
    this.items = [];
  }
}