# 搭建基本结构
码路
## new Promise可以创建一个Promise对象，这个对象上有很多方法，比如then、catch、finally
## promise本身也有一些方法，类方法(静态方法)，比如resolve、reject、all、race
### 1.搭建constructor

### 2.实现then方法
then方法中传递两个回调函数,需要等待promise状态改变后执行其中一个回调函数
p.then()
#callbackobj = {}; 

### 3.存储多个then中的回调函数
p.then()多次，需要把每一次状态未改变的回调函数存起来，状态改变时，再把每一个回调函数取出来执行

### 5.实现then方法中的链式调用
.then的返回值是一个新的promise对象，这个promise对象的状态取决于then方法中回调函数的返回值

### 6.then方法参数的默认值
 //then方法的传参不存在|不是函数时，需要赋默认值
    if(!onResolved instanceof Function) {
        onResolved = value => value;
    }
    if(!onRejected instanceof Function) {
        onRejected = reason => {throw reason;}
    }

### 7.实现catch方法
    catch方法是then方法的一个语法糖，相当于then(null, onRejected)

### 8. 自身的resolve方法
    resolve方法可以传递3种参数，普通值、promise对象、thenable对象

### 9. 自身的reject方法
    reject表示直接传递一个失败的promise对象

### 10.静态方法all
    all方法接收一个数组，数组中每一个元素都是一个promise对象，all方法返回一个promise对象，这个promise对象的状态取决于数组中所有promise对象的状态，只有当数组中所有promise对象都成功时，all方法返回的promise对象才成功，只要有一个失败，all方法返回的promise对象就失败
#### redux-saga

### 11.静态方法race
    返回最先成功或者最先失败的方法

