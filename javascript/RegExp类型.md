# RegExp类型

---

### 语法
var expression = / pattern / flags

pattern: 模式部分，正则表达式
flag: 标志，标明正则表达式匹配行为，可以同时写多种模式exp = /(\w)st/igw
三种模式：

* g: global, 表示全局模式。模式将被应用于所有的字符串
* i：ignoreCase, 表示不区分大小写模式。忽略模式与字符串的大小写
* m: multiline, 表示多行模式。到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

```
var pattern1 = /[bc]at/i;
var pattern2 = new RegExp('[bc]at', 'i');
```

### 实例属性

* global: boolean值，表示是否设置g标志
* ignoreCase: boolean值，表示是否设置i标志
* multiline: boolean值，表示是否设置m标志
* lastIndex: int值，表示开始搜索下一个匹配项的字符位置，从0开始
* source: string值，正则表达式的字符串表示

补充：
RegExp实例继承的toLocaleString()和toString()方法都会返回正则表达式的字面量。

### 实例方法

* .exec()
接受一个要匹配的字符串，返回一个Array形式的匹配结果或null
```
var text = 'mom and dad and baby';
var pattern = /mom( and dad( and baby) ?)?/gi;
var matches = pattern.exec(text);
console.log(matches);

// result Array形式
[
    0: "mom and dad and baby", 
    1: " and dad and baby",
    2: " and baby",
    index: 0, 
    input: "mom and dad and baby",
    length: 3
]
```

注：
在不设置g全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息，在设置全局标志的情况下，每次调用exec()则会在字符串中继续查找新的匹配项。

* .test()
接受一个要匹配的字符串，模式与该字符串匹配返回true，否返回false
```
var text = '000-000-0000';
var pattern = /\d{3}-\d{3}-\d{4}/;
if (pattern.exec(text)) {
  alert('匹配');
}
```

* .compile()

可以改变检索模式，也可以添加或删除第二个参数: .compile( pattern [, flags ] )

```
var text = 'test best BEST';
var pattern = /test/
var result = pattern.exec(text);
console.log(result);

pattern.compile('best', 'ig');

var result = pattern.exec(text);
console.log(result);
var result = pattern.exec(text);
console.log(result);

// 结果
["test", index: 0, input: "test best BEST"]
["best", index: 5, input: "test best BEST"]
["BEST", index: 10, input: "test best BEST"]
```

### 构造函数属性

构造函数属性适用于作用域中所有正则表达式，并且基于所执行的最近一次正则表达式操作而变化。

* input: 最近一次要匹配的字符串，Opera未实现此属性
* leftContext: input字符串中lastMatch之前的文本
* rightContext: input字符串中lastMatch之后的文本 
* lastMatch: 最近一次的匹配项, Opera未实现此属性
* lastParen: 最近一次匹配的捕获组， Opera未实现此属性
* multiline: bollean值，表示是否所有表达式都使用多行模式。IE和Opera未实现
* RegExp.$1， RegExp.$2， RegExp.$3，... RegExp.$9: 返回在模式匹配期间找到的，所存储的最近的九个部分。只读

```
var text = 'this has been a short summer';
var pattern = /(.)hort/g;
var result = pattern.exec(text);
console.log('input->', RegExp.input);
console.log('leftContext->', RegExp.leftContext);
console.log('rightContext->', RegExp.rightContext);
console.log('lastMatch->', RegExp.lastMatch);
console.log('lastParen->', RegExp.lastParen);
console.log('multiline->', RegExp.multiline);

// 结果，基于chrome浏览器
input-> this has been a short summer 
leftContext-> this has been a
rightContext->  summer
lastMatch-> short
lastParen-> s
multiline-> undefined   // 没有该属性
```

```
// RegExp.$1...RegExp.$9: 每当产生一个带括号的成功匹配时，$1...$9 属性的值就被修改。可以在一个正则表达式模式中指定任意多个带括号的子匹配，但只能存储最新的九个。

var re = /(\w+)@(\w+)\.(\w+)/g
var src = "Please send mail to george@contoso.com and someone@example.com. Thanks!"
result = re.exec(src);
console.log(RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6, RegExp.$7, RegExp.$8, RegExp.$9)

// 结果
george contoso com 
```


