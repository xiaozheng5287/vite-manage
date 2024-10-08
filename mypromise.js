//IIFE
(function(window) {
    // console.log('mypromise');
    class MyPromise{
        #state = 'pending'; //状态
        #result; //结果
        // #callbackobj = {}; //保存then中的两个回调函数，以便处理状态还未改变时的then方法
        #callbacklist = []; //保存then中的两个回调函数，以便处理状态还未改变时的then方法


        constructor(exector){
            //private私有属性
            //传入执行器
            // console.log('constructor',exector);
            
            //把等待的promise变成成功态
            const changeResolved = (value) => {
                //状态只能修改一次
                if(this.#state !== 'pending') return;
                this.#state = 'fulfilled';
                this.#result = value;
                //状态改变后，执行回调函数
                this.#callbacklist.forEach((callback) => {
                    callback.onResolved?.(value);
                })
            }

            //把等待的promise变成失败态
            const changeRejected = (reason) => {
                if(this.#state !== 'pending') return;
                this.#state = 'rejected';
                this.#result = reason;
                //状态改变后，执行回调函数
                this.#callbacklist.forEach((callback) => {
                    callback.onRejected?.(reason);
                })
            }

            try {
                //执行器立即执行
                exector(changeResolved, changeRejected);
            } catch (error) {
                changeRejected(error);
            }
        }
        //then方法，then中的两个函数是异步执行的
        then(onResolved, onRejected) {
            // console.log('then',onResolved, onRejected);
            //then方法的传参不存在|不是函数时，需要赋默认值
            if(!onResolved instanceof Function) {
                onResolved = value => value;
            }
            if(!onRejected instanceof Function) {
                onRejected = reason => {throw reason;}
            }

            //then方法是支持链式调用的，所以需要返回一个新的promise
            return new MyPromise((resolve, reject) => {
                //同样传入执行器

                const handler = (callback) => {
                    try {
                        const result = callback(this.#result);
                        //result可能有三种情况，1）新的promise，2）普通值-即成功，3）错误-即失败(try-catch)
                        if(result instanceof MyPromise) {
                            result.then(value => {
                                    resolve(value);
                                }, reason => {
                                    reject(reason);
                                }
                            );
                        }
                        else{
                            resolve(result);
                        }
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                
                if(this.#state === 'fulfilled') {
                    //包一层定时器，确保异步执行
                    setTimeout(() => {
                        handler(onResolved)
                    })
                }
                else if(this.#state === 'rejected') {
                    //包一层定时器，确保异步执行
                    setTimeout(() => {
                        handler(onRejected)
                    })
                }
                else {
                    //处理状态为pending时，保存回调函数
                    this.#callbacklist.push({
                        onResolved:()=>{handler(onResolved)},
                        onRejected:()=>{handler(onRejected)}
                    })
                }
            })
        }
        //catch方法,是then的一个语法糖，相当于then中的onResolved为空
        catch(onRejected) {
            this.then(null, onRejected);
        }
        static resolve(value) {
            if(value instanceof MyPromise) {
                //如果入参是promise，直接返回promise本身
                return value;
            }
            else if(typeof value?.then === 'function') {
                //如果入参是thenable对象，返回一个promise，这个promise执行then方法
                return new MyPromise((resolve, reject) => {
                    setTimeout(() => {
                        value.then(resolve, reject);
                    })
                })
            }
            else {
                //如果入参是普通值，返回一个promise，这个promise执行resolve
                return new MyPromise((resolve, reject) => {
                    resolve(value);
                })
            }
        }
        static reject(reason) {
            return new MyPromise((resolve, reject) => {
                reject(reason);
            })
        }
        static all(promises) {
            return new MyPromise((resolve, reject) => {
                //all里面需要传可迭代对象
                if(typeof promises[Symbol.iterator] === 'function') {
                    //定义一个容器，存放所有promise成功的结果
                    const resultArr = Array(promisesArr.length);
                    //将可迭代对象转换为数组
                    const promisesArr = Array.from(promises);
                    promisesArr.forEach((item, index)=>{
                        const tmp = MyPromise.resolve(item);
                        tmp.then(value => {
                            resultArr[index] = value; //将成功的结果存入容器
                            //如果容器中所有结果都成功，则resolve
                            if(resultArr.filter(()=> true).length === promisesArr.length) {
                                resolve(resultArr);
                            }
                        })
                        //如果有一个promise失败，则reject
                        .catch(reason => {
                            reject(reason);
                        })
                    })
                }
                else {
                    reject('promises is not iterable!')
                }
            })
        }
        static race(promises) {
            return new MyPromise((resolve, reject) => {
                //race里面需要传可迭代对象
                if(typeof promises[Symbol.iterator] === 'function') {
                    for(let item of promises) {
                        const tmp = MyPromise.resolve(item);
                        tmp.then(resolve,reject)
                    }
                }
                else {
                    reject('promises is not iterable!')
                }
            })
        }
    }
    window.MyPromise = MyPromise;  
})(window);