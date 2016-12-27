## padding

### 对于block水平元素
* padding值暴走，一定会影响尺寸
* width非auto，一定会影响尺寸
* width: auto或box-sizing:border-box时，padding没有暴走，不影响尺寸。

### 对于inline水平元素
* 水平padding影响尺寸，垂直padding不影响尺寸。但会影响背景色（占据空间）。
```
// 测试
.inline {
    padding: 100px;
    background: #cdc;
}

<div>111111111111111111111111</div>
<div>
  <span>2222222</span>
  <span class="inline">3333333</span>
  <span>4444444</span>
</div>
<div>111111111111111111111111</div>

```  

### 高度可控分割线
* 实现 “注册 | 登陆” 效果
```
// 直接使用字符
// inline-block控制
// 使用inline padding
.line {
 padding: 16px 6px 1px;
 margin-left: 12px;
 border-left: 2px solid;
 font-size: 0px;
}
注册<span class="line"></span>登陆
```

### 负值
* padding不支持任何形式的负值

### 百分比
* padding百分比均是相对于宽度计算
```
// padding: 50% 实现正方形，eg在客户端实现一个正方形区域
<div style="width: 100px; height: 100px; padding: 50%; background: #a3a"></div>
```
### inline水平元素的padding百分比
* 同样相对于宽度计算
* 默认的高度宽度细节有差异
* padding会断行
```
测试断行
<span style="width: 100px; height: 200px; padding: 80%; background: #3c1">格式修改<div>
``

### 空inline元素与padding宽高也不等
* inline元素垂直padding会让“幽灵空白节点”出现，就是规范中的strut出现，可用font-size:0处理。

### ol、ul列表
* ol、ul中内置padding-left,单位是px，不是em，例如chrome浏览器下是40px
* 字号很小，间距就会很宽
* 字号很大，序号就会爬到容器外面

### 表单元素的内置padding
* 所有浏览器input，textarea输入框内置padding 
* 所有浏览器button按钮内置padding
* 部分浏览器select下拉内置padding，例如Firefox，IE8+可以设置padding
* 所有浏览器radio,checkbox单复选框无内置padding
* button按钮元素的padding最难控制

### button表单按钮padding

* 不同浏览器padding设置为0
```
// chrome
padding： 0

// firefox
button::-moz-focus-inner{ padding: 0 }
 
// IE浏览器，IE7文字越多，左右padding越大
button { overflow: visible; }
```

* padding与高度计算的不兼容
```
button {
  line-height: 20px;
  padding: 10px;
  border: none;
}

// 高度
IE7: 45px;
IE8: 40px;
FireFox: 42px;
Chrome: 40px;
```
* 解决button按钮高度不兼容问题
```
// 用label标签模拟button
label {
    display: inline-block;
    line-height: 20px;
    padding: 10px;
}
<button id="btn"></button><!--button隐藏-->
<label for="btn">test button</label>
```

### padding绘制图片
```
// 实现‘三’图标
<style type="text/css">
  .line-tri {
    width: 150px;
    height: 30px;
    border-top: solid 30px;
    border-bottom: solid 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #d2d;
    background-clip: content-box;
  }
</style>
<div class="line-tri"></div>
```

### padding布局

* 移动端，头图布局
* 配合margin，等高布局
* 两栏自适应布局
```
img {
  float: left
}
.auto {
  padding-left: 100px;
}


<div>
  <img />
  <div class="auto"></div>
</div>
```