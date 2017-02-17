### 图例组件

图例组件展现了不同系列的标记(symbol)，颜色和名字,ECharts 3 中单个 echarts 实例中可以存在多个图例组件.legend可以为[],里面几个{}元素，产生几组图例。
```js
legend: {
    show: true,
    zlevel: 0,  // 所有图形的 zlevel 值???
    z: 0,  // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖
    left: 'right',  // 图例组件离容器左侧的距离,eg: 20px, 20%,'left', 'center', 'right'，组件会根据相应的位置自动对齐
    top: 10,  // 图例组件离容器上侧的距离,eg: 20px, 20%,'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐
    right: 0,  // 图例组件离容器右侧的距离
    bottom: 0,  // 图例组件离容器下侧的距离
    width: 20,  // 图例组件的宽度。默认自适应
    height: 20,  // 图例组件的高度。默认自适应
    orient: 'horizontal',  // 图例列表的布局朝向,'horizontal'、'vertical'
    align: 'left',  // 图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，及为 'right'。eg:'auto'、'left'、'right'
    padding: [100, 200],  //图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    itemGap: 40,  // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
    itemWidth: 30,  // 图例标记的图形宽度
    itemHeight: 50,  // 图例标记的图形高度
    formatter: 'Legend {name}',  // 用来格式化图例文本，支持字符串模板和回调函数两种形式// 使用字符串模板，模板变量为图例名称 {name} eg: formatter: 'Legend {name}'、formatter: function (name) { return 'Legend ' + name; }
    selectedMode: 'single',  // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选(只展示一个图例)或者多选模式。
    inactiveColor: '#0000ff',  // 图例关闭时的颜色
    selected: {'销量': false, '价格': true}, // 图例选中状态表。eg: selected: {'系列1': true, '系列2': false} 选中'系列1，未选中系列2'
    textStyle: {
        color: '#ff0000',  // 文字的颜色
        fontStyle: 'oblique',  // 文字字体的风格,eg: 'normal'、'italic'、'oblique'
        fontWeight: 700,  // 文字字体的粗细,eg: 'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400...
        fontFamily: '仿宋',  // 文字的字体系列
        fontSize: 18,  // 文字的字体大小
    },
    tooltip: {  // 图例的 tooltip 配置，配置项同 tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip  ???
         //show: true
    },
    data:[  // 图例的数据数组。数组项通常为一个字符串，每一项代表一个系列的 name（如果是饼图，也可以是饼图单个数据的 name）。图例组件会自动获取对应系列的颜色，图形标记（symbol）作为自己绘制的颜色和标记，特殊字符串 ''（空字符串）或者 '\n'（换行字符串）用于图例的换行
    {
        name: '销量',  // 图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）
        icon: 'circle',  // 图例项的 icon,eg:'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        textStyle: {  // 图例项的文本样式
            color: 'yellow'
        }
    },
    {
        name: '价格',
        icon: 'circle',
        textStyle: {
            color: 'green'
        }
    }],
    backgroundColor: '#aaa',  // 图例背景色，默认透明
    borderColor: '#00ff00',  // 图例的边框颜色
    borderWidth: 4,  // 图例的边框线宽
    shadowBlur: 20,  // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果,此配置项生效的前提是，设置了 show: true 以及值不为 tranparent 的背景色 backgroundColor
    shadowColor: 'rgba(0, 0, 0, 0.5)',  // 阴影颜色,此配置项生效的前提是，设置了 show: true
    shadowOffsetX: 20,  // 阴影水平方向上的偏移距离,此配置项生效的前提是，设置了 show: true
    shadowOffsetY: 20,  // 阴影垂直方向上的偏移距离,此配置项生效的前提是，设置了 show: true
}
```
