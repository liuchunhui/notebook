### xAxis

`直角坐标系 grid 中的 x 轴`，一般情况下单个 grid 组件最多只能放左右两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。

```js
xAxis: {
  gridIndex: 0,  // default: 0, x 轴所在的 grid 的索引，默认位于第一个 grid???
  position: 'top',  // x 轴的位置,eg: 'top'、'bottom'，默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧
  offset: 2, // default: 0, X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用
  type: 'category',  // 坐标轴类型,eg: 'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度;'log' 对数轴,适用于对数数据
  name: '坐标轴名称',  // 坐标轴名称
  nameLocation: 'start',  // default: 'end'，坐标轴名称显示位置。eg: 'start'、'middle'、'end'
  nameTextStyle: {
    color: '#ff00ff',  // 坐标轴名称的颜色
    fontStyle: 'italic',  //  default: 'normal'，坐标轴名称文字字体的风格,eg:'normal'、'italic'、'oblique'
    fontWeight: 'bolder',  // default: normal，坐标轴名称文字字体的粗细，eg:'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400...
    fontFamily: '微软雅黑',  // default: 'sans-serif' ,坐标轴名称文字的字体系列
    fontSize: 16  // default: 12, 坐标轴名称文字的字体大小
  },
  nameGap: 0,  // default: 15, 坐标轴名称与轴线之间的距离
  nameRotate: 10,  // default: null, 坐标轴名字旋转，角度值(默认逆时针旋转)
  inverse: false,  // default: false, 是否是反向坐标轴
  boundaryGap: true,  // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样,类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true,这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效???
  min: 1,  // default: 'auto',X坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）???
  max: 30,  // default: 'auto',X坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度,剩余同min
  scale: true,  // default: false, 只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。???
  splitNumber: 10,  // default: 5, X坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整,在类目轴中无效
  minInterval: 0, // default: 0, 自动计算的坐标轴最小间隔大小？？
  interval: 1,  // 强制设置坐标轴分割间隔小大,因为 splitNumber 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 min、max 强制设定刻度划分，一般不建议使用。无法在类目轴中使用。在时间轴（type: 'time'）中需要传时间戳，在对数轴（type: 'log'）中需要传指数值
  logBase: 20,  //  default: 10, 对数轴的底数，只在对数轴中（type: 'log'）有效
  silent: true,  // default: false, 坐标轴是否是静态无法交互
  triggerEvent: {  // 坐标轴的标签是否响应和触发鼠标事件，默认不响应
    componentType: 'string',
    // 未格式化过的刻度值, 点击刻度标签有效
    value: '羊毛衫',
    // 坐标轴名称, 点击坐标轴名称有效
    name: '羊毛衫'
  },
  axisLine: {  // 坐标轴轴线相关设置
    show: true,  // 是否显示坐标轴轴线
    onZero: true,  // default: true, X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效???
    lineStyle: {
      // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, 
        color: 'red' // 0% 处的颜色
      }, {
        offset: 1, 
        color: 'blue' // 100% 处的颜色
      }], false),
      width: 10,  // default: 1, 坐标轴线线宽
      type: 'dotted',  // 坐标轴线线的类型。eg: 'solid'、'dashed'、'dotted'
      shadowBlur: 50,  // 图形阴影的模糊大小
      shadowColor: 'rgba(0, 0, 0, 0.5)',  // 阴影颜色
      shadowOffsetX: 20,  // default: 0, 阴影水平方向上的偏移距离
      shadowOffsetY: 20,  // default: 0, 阴影垂直方向上的偏移距离
      opacity: 0.5,  // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
    }
  },
  axisTick: {  // 坐标轴刻度相关设置
    show: true,  // default: true, 是否显示坐标轴刻度
    alignWithLabel: true,  // default: false, 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐???
    interval: 50,  // default: auto, 坐标轴刻度的显示间隔，在类目轴中有效???
    inside: true,  // default: false, 坐标轴刻度是否朝内，默认朝外
    length: 10,  // X坐标轴刻度的长度
    lineStyle: {
      color: '#358',  // 刻度线的颜色
      width: 5,  // default: 1, 坐标轴刻度线宽
      type: 'dotted',  // 坐标轴刻度线的类型。eg: 'solid'、'dashed'、'dotted'
      shadowBlur: 20,  // 刻度线的图形阴影的模糊大小
      shadowColor: '#000000',  // 刻度线的阴影颜色
      shadowOffsetX: 30,  // default: 0, 刻度线的阴影水平方向上的偏移距离
      shadowOffsetY: 20,  // default: 0, 刻度线的阴影垂直方向上的偏移距离
      opacity: 1  // 刻度线的图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
    }
  },
  axisLabel: {  // 坐标轴刻度标签的相关设置
    show: true,  // default: true, 是否显示刻度标签
    interval: 0,  // 坐标轴刻度标签的显示间隔，隔几个显示一个坐标轴刻度，在类目轴中有效
    inside: true,  // default: false, 刻度标签是否朝内，默认朝外
    rotate: 10,  // default: 0, 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠,旋转的角度从 -90 度到 90 度
    margin: 20,  // default: 8, 刻度标签与轴线之间的距离
    formatter: '{value} *', // default: null, 刻度标签的内容格式器，支持字符串模板和回调函数两种形式 function (value, index) {return value;}, 支持回调函数color: function (val) {return val >= 0 ? 'green' : 'red';}、
    textStyle: {
      color: 'green', // 刻度标签文字的颜色
      fontStyle: 'italic',  // default: normal, 文字字体的风格eg: 'normal'、'italic'、'oblique'
      fontWeight: 'bolder',  // 文字字体的粗细,eg: 'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400
      fontFamily: '仿宋', // 文字的字体系列
      fontSize: '16',  // default: 12, 文字的字体大小
    }
  },
  splitLine: {  // X坐标轴在 grid 区域中的分隔线
    show: true,  // default: true, 是否显示分隔线。默认数值轴显示，类目轴不显示
    interval: 20,  // default: auto, 坐标轴分隔线的显示间隔，在类目轴中有效???
    lineStyle: {
      color: ['#aaa', '#ddd'],  // default: #ccc, X轴分隔线颜色，可以设置成单个颜色，也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色
      width: 4,  // default: 1, 分隔线线宽
      type: 'dotted',  // default: solid,分隔线线的类型。eg: 'solid'、'dashed'、'dotted'
      shadowBlur: 10,  // 图形阴影的模糊大小
      shadowColor: 'yellow',  // 阴影颜色
      shadowOffsetX: 10,  // default: 0, 阴影水平方向上的偏移距离
      shadowOffsetY: 10,  // default: 0, 阴影垂直方向上的偏移距离
      opacity: 1  // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
    }
  },
  splitArea: {  // 坐标轴在 grid 区域中的分隔区域，默认不显示
    show: true,  // 是否显示分隔区域
    interval: 10,  // 坐标轴分隔区域的显示间隔，在类目轴中有效
    areaStyle: {  // 分隔区域的样式设置
      color: ['red'],  // default: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'] 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
      shadowBlur: 10,  // 图形阴影的模糊大小
      shadowColor: 'blue', // 阴影颜色
      shadowOffsetX: 10,  // default: 0, 阴影水平方向上的偏移距离
      shadowOffsetY: 10,  // default: 0, 阴影垂直方向上的偏移距离
      opacity: 0.5, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
    }
  },
  zlevel: 1,  // default: 0, X 轴所有图形的 zlevel 值
  z: 1,  // default: 0, X 轴组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖,z相比zlevel优先级更低，而且不会创建新的 Canvas。
  data: [{  // 类目数据，在类目轴（type: 'category'）中有效
    value: "衬衫",  // 单个类目名称
     textStyle: {  // 类目标签的文字样式
        fontSize: 20,
        color: '#ff0000',
        align: 'right',  // 文字水平对齐方式，默认自动。eg: 'left'、'center'、'right'
        baseline: 'top',  // 文字基线对齐方式，默认自动。eg: 'top'、'middle'、'bottom'
        fontStyle: 'oblique',  // 文字字体的风格,eg:'normal'、'italic'、'oblique'
        fontWeight: 600,  // 文字字体的粗细,eg: 'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400
        fontFamily: '微软雅黑',  // 文字的字体系列
        fontSize: 12  // 文字的字体大小

    }
  }, "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
}
```
