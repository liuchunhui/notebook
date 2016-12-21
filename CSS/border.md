##border

### border-width
* border-width不支持百分比值，border-width不会因为设备大比例就变大。
类似outline、box-shadow、text-shadow...
* border-width支持关键字：thin 1px、medium（默认）3px、thick 5px。
默认为medium 3px，推测boder-style：double时，border-width设置为3px才有效果

### border-style
* border-style: solid 实线
    ```
    // 实现箭头朝右的三角icon
    .triangle {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: solid 10px;
        border-bottom: 10px solid transparent;
        border-right: 10px solid transparent;
    }
    <div class="triangle"></div>
    ```
* border-style: dashed 虚线。在chrome、Firefox上，每个虚线点的宽高比是3:1，每个虚线点之间的距离和虚线点的宽度比是1:1,
在ie上每个虚线点的宽高比是2:1,每个虚线点之间的距离和虚线点的宽度比是1:2。
* border-style: dotted 点线。在chrome，点线的点是方的。在ie、Firefox上下是圆的。
```
// 利用ie的点是圆的，制作圆效果
.box {
    width: 150px;
    height: 150px;
    overflow: hidden;
}
.dotted {
    width: 100%;
    height: 100%;

    border: 149px dotted #cd0000;
}
<div class="box">
    <div class="dotted"></div>
</div>
```
* border-style: double 双线。
```
// 双线计算规则：双线宽度永远相等，中间间隔正负加1
1px: 0 + 1 + 1
2px: 1 + 0 + 1
3px: 1 + 1 + 1
4px: 1 + 2 + 1
5px: 2 + 1 + 2
6px: 2 + 2 + 2
7px: 2 + 3 + 3
8px: 3 + 2 + 3
```
```
// double 实线‘三’icon效果
.double {
    width: 120px;
    height: 20px;

    border-top: 60px double;
    border-bottom: 20px solid;
}
<div class="double"></div>
```
* border-style: inset 内凹。
* border-style: outset 外凸。

### border与color
* border-color就是color，没有指定border-color颜色值时，会使用color作为边框颜色值。类似box-shadow、text-shadow...
```
// 利用color作为边框颜色值，制作当鼠标悬浮在div上时，边框和div内字体同时变色
.color {
    width: 70px;
    height: 40px;
    transition: color .25s;  // transition只需要一个color属性
    border: 5px solid;
}
.color:hover {
    color: #06c;
}
<div class="color">悬浮变色</div>
```

### border与background
* background只能相对于左上角数值定为，不能相对右下角。
```
// background背景图相对右下角
.background {
    width: 200px;
    height: 100px;

    border-right: 50px solid transition;  // 与右侧隔50px
    background: url(./test.jpg) no-repeat; 
    background-position: 100% 40px;  // 100%定位不计算border区域
}
<textarea class="background"></textarea>
```

### border与透明边框
* border边框透明始于ie7，兼容性好。

### border与布局
* 等高布局
```
// 利用border实现等高布局实现原理，局限不支持百分比宽度
.box {
    border-left: 300px solid #333;
}
.left {
    width: 300px;
    margin-left: -300px;
    float: left;
    background-color: #333;
    color: #fff;
}
.module {
    width: 100%;
    height: 30px;

    background-color: #ddd;
    color: #333;
}
<div class="box">
    <nav class="left">
        <h3>导航</h3>
    </nav>
    <section>
        <div class="module">模块一</div>
        <div class="module">模块二</div>
        <div class="module">模块三</div>
    </section>
</div>
```
