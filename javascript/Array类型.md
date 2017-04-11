# Array类型

---

### Array类型

* 创建数组
```
var color = new Array();
var color = new Array(3);
var color = new Array('red', 'green');
var color = Array(3);
var color = Array('red', 'green');
var color = ['red', 'green'];
```

* .length属性
length属性不是只读的，通过length属性，可以从数组的末尾移除项或向数组中添加新项。
```
var color = ['red', 'green'];
color.length = 0;  // 清空数组
console.log(color);

// 结果
[]
```

* 检测是否是数组

```
var arr = ['arr1', 'arr2'];
Array.isArray(arr);  // 检测数组

// 结果
true
```

### 转换方法

* .toLocaleString()
* .toString(): 返回数组中的每个值的字符串形式拼接成一个以逗号分割的字符串
* .valueOf(): 返回数组
* .join(): 接收一个作为分隔符的字符串，返回数组中的元素组成的字符串，每个元素间以分隔符作为分隔

toLocaleString()和toString()为了取得每一项值，调用数组每一项元素的toLocaleString()和toString()方法
```
var color1 = {
  toLocaleString: function() {
    return 'red';
  },
  toString: function() {
    return 'RED'
  }
}

var color2 = {
  toLocaleString: function() {
    return 'green';
  },
  toString: function() {
    return 'GREEN';
  }
}

var colors = [color1, color2];

console.log(colors.toLocaleString());
console.log(colors.toString());

// 结果
red,green
RED,GREEN
```

### 栈方法（LIFO）

LIFO：last in first out

* .push(): 接收任意数量的参数，逐个添加至数组末尾，并返回修改后数组的长度
* .pop(): 从数组末尾移除最后一项，减少数组length的长度

### 队列方法（FIFO）

FIFO： first in first out

* .shift(): 移除数组中的第一项并返回该项，数组长度减一
* .unshift(): 在数组前端添加任意个项，并返回新数组长度

### 重排序方法

* .reverse(): 翻转数组项的顺序
* .sort(): 按升序排序数组项
sort()方法会调用每个数组项的toString()转型方法，即使每一项的是数值，比较的也是字符串

.sort()可接受一个作为比较函数的参数
```
function compare(value1, value2) {  // 比较函数
  if (value1 > value2) {
    return 1;
  }else if (value1 < value2) {
    return -1;
  }else {
    return 0;
  }
}

[2,5,6,12,88, 1, 0, 99, 23].sort(compare);

// 结果
[0, 1, 2, 5, 6, 12, 23, 88, 99]
```

### 操作方法

* .concat(): 创建当前数组的副本，将接收到的参数添加到副本的末尾，最后返回新构建的数组
```
var color = ['red', 'green'];
var new_color = color.concat('yellow');
console.log(color);
console.log(new_color);

// 结果
["red", "green"]
["red", "green", "yellow"]
```
* .slice(): 接受一个或两个参数，即要返回项的起始和结束位置，基于当前数组创建新数组，不影响原始数组。参数中有负数，则用数组长度加上该负数，如果结束位置小于起始位置，则返回空数组。
```
var arr = ['a', 'b', 'c', 'd'];
var new_arr = arr.slice(0, 3);
console.log(new_arr);

// 结果
["a", "b", "c"]
```
* .splice(): 处理后影响原始数组
 - 删除：.splice(删除的起始位置, 删除项的个数)
 - 插入：.splice(插入的起始位置, 0(要删除项的个数), 要插入的项)
 - 替换：.splice(起始位置, 要删除项的个数， 要插入的任意数量的项)
```
var arr = ['a', 'c', 'd', 'e', 'f', 'g'];
arr.splice(1, 1);  // 删除
console.log(arr)

arr.splice(0, 0, '000');  // 插入
console.log(arr);

arr.splice(1, 1, 'A');  // 替换
console.log(arr);

// 结果
["a", "d", "e", "f", "g"]  // 删除
["000", "a", "d", "e", "f", "g"]  // 插入
["000", "A", "d", "e", "f", "g"]  // 替换
```
 
### 位置方法

* .indexOf(): 从数组开头（位置0）开始向后查找
* .lastIndexOf(): 从数组末尾开始向前找

indexOf(),lastIndexOf()接受两个参数，第一个是要查找的项，第二个是查找的起始位置（可选）。
没找到返回-1, 查找每项使用的是===全等比较。

### 迭代方法

* .every(): 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
* .some(): 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
* .filter(): 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
* .forEach(): 对数组中的每一项运行给定函数，没有返回
* .map(): 对数组中的每一项运行给定函数, 返回每次函数调用的结果组成的数组

以上方法中传入的函数都会接受三个参数：数组项的值、该项在数组中的位置、数组对象本身

```
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// .every() 方法
var everyResult = numbers.every(function(item, index, array) {
  return (item > 2)
})
console.log(everyResult);  //结果：false

// .some() 方法
var someResult = numbers.some(function(item, index, array) {
  return (item > 2)
})
console.log(someResult);  //结果： true

// .filter() 方法
var filterResult = numbers.filter(function(item, index, array) {
  return (item > 2)
})
console.log(filterResult);  // 结果： [3, 4, 5, 4, 3]

// .map() 方法
var mapResult = numbers.map(function(item, index, array) {
  return item * 2;
})
console.log(mapResult);  // 结果： [2, 4, 6, 8, 10, 8, 6, 4, 2]

// .forEach() 方法，相当于for循环
numbers.forEach(function(item, index, array) {
  console.log(item);
})
```

### 归并方法

* .reduce(): 迭代数组所有的项，构建一个最终返回的值，从数组的第一项开始，逐个遍历到最后一项
* .reduceRight(): 迭代数组所有的项，构建一个最终返回的值，从数组的最后一项开始，逐个遍历到第一项

```
// reduce()方法
var value = ['a', 'b', 'c', 'd', 'e'];
var str = value.reduce(function(prev, cur, index, array) {
  return prev + cur; 
})
console.log(str);

// 结果
abcde

// reduceRight()方法
var value = ['a', 'b', 'c', 'd', 'e'];
var str = value.reduceRight(function(prev, cur, index, array) {
  return prev + cur; 
})
console.log(str);

// 结果
edcba
```