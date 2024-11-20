## 1. 题目描述

输入一个int型正整数，计算出该int型数据在内存中存储1的个数

示例1:

```
输入：5
输出：2
```



## 2. Solution

```python
n = int(input())
print(bin(n).count('1'))


function countOnesInInt(num) {
    let count = 0;
    while (num !== 0) {
        count += num & 1; // 检查最低位是否为1
        num >>>= 1; // 右移一位，无符号右移
    }
    return count;
}

// 示例
const input = 29; // 输入一个int型正整数
const result = countOnesInInt(input);
console.log(`数字 ${input} 在内存中存储1的个数为: ${result}`);
```

