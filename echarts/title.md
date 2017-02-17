### 标题组件，包含主标题和副标题。
ECharts 3 中可以存在任意多个标题组件, title可以是一个[], 里面几个{}元素，可生成几个标题组件。
```js
title: {
    show: true,  // 是否显示标题组件
    text: '主标题文本\n 标题换行',  // 主标题文本
    link: 'https://www.baidu.com',  // 主标题文本超链接
    target: 'self',  // 指定窗口打开主标题超链接('self':当前窗口打开,'blank':新窗口打开)
    textStyle: { 
        color: '#333',  // 主标题文字的颜色
        fontStyle: 'italic',  // 主标题文字字体的风格('normal', 'italic', 'oblique')
        fontWeight: 'bold',  // 主标题文字字体的粗细('normal', 'bold', 'bolder', 'lighter', 100 | 200 | 300 | 400...)
        fontFamily: '仿宋',  // 主标题文字的字体系列
        fontSize: 18  // 主标题文字的字体大小
    },
    textAlign: 'left',  // 标题文本水平对齐，支持 'left', 'center', 'right'，默认根据标题位置决定
    textBaseline: 'top', //标题文本垂直对齐，支持 'top', 'middle', 'bottom'，默认根据标题位置决定
    subtext: '副标题文本',  // 副标题文本，支持使用 \n 换行
    sublink: 'https://www.zhihu.com/',  // 副标题文本超链接
    subtarget: 'blank', // 指定窗口打开副标题超链接,'self':当前窗口打开,'blank':新窗口打开
    subtextStyle: {
        color: '#00ff00',  // 副标题文字的颜色
        fontStyle: 'oblique',  // 副标题文字字体的风格:'normal'、'italic'、'oblique'
        fontWeight: 'bolder',  // 副标题文字字体的粗细:'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400...
        fontFamily: '宋体',  // 副标题文字的字体系列
        fontSize: 20  // 副标题文字的字体大小
    },
    padding: 20,  // 标题内边距，单位px,默认各方向内边距为5，接受数组分别设定上右下左边距
    itemGap: 30,  // 主副标题之间的间距
    zlevel: 0,  // 所有图形的 zlevel 值 ???
    z: 4,  // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖
    left: 'right',  // grid 组件离容器左侧的距离, eg: 20px, 20%,'left', 'center', 'right'，组件会根据相应的位置自动对齐
    top: 200,  // grid 组件离容器上侧的距离, eg: 20px, 20%,'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐
    right: 100,  // grid 组件离容器右侧的距离,默认自适应
    bottom: 100,  // grid 组件离容器下侧的距离
    backgroundColor: '#00ffff',  // 标题背景色，默认透明
    borderColor: '#00ff00',  // 标题的边框颜色
    borderWidth: 2,  // 标题的边框线宽
    shadowBlur:  10,  // 图形阴影的模糊大小,该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果,此配置项生效的前提是，设置了 show: true 以及值不为 tranparent 的背景色 backgroundColor
    shadowColor: '#0000ff', //阴影颜色,此配置项生效的前提是，设置了 show: true
    shadowOffsetX: 10,  // 阴影水平方向上的偏移距离,此配置项生效的前提是，设置了 show: true
    shadowOffsetY: 20,  // 阴影垂直方向上的偏移距离,此配置项生效的前提是，设置了 show: true
}
```
