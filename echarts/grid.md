### grid

直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
grid设置为[]，元素为多个{}，可设置多个grid组件。

```js
grid: {
  show: true,  // default: true, 是否显示直角坐标系网格
  zlevel: 0,  // default: 0, 所有图形的 zlevel 值???
  z: 2,  // default: 2, 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖
  left: 200,  // default: auto, grid 组件离容器左侧的距离
  top: 100,  // default: 60, grid 组件离容器上侧的距离
  right: 0,  // default: 10%, grid 组件离容器右侧的距离
  bottom: 50,  // default: 60, grid 组件离容器下侧的距离
  width: 300,  // default: auto, grid 组件的宽度
  height: 200,  // default: auto, grid 组件的高度
  containLabel: true,  // default: false, grid 区域是否包含坐标轴的刻度标签，在无法确定坐标轴标签的宽度，容器又比较小无法预留较多空间的时候，可以设为 true 防止标签溢出容器???
  backgroundColor: '#ccc',  // default: 'transparent', 网格背景色，默认透明
  borderColor: '#333',  // default: '#ccc', 网格的边框颜色
  borderWidth: 2,  // default: 1, 网格的边框线宽
  shadowBlur: 'rgba(0, 0, 0, 0.5)', // 图形阴影的模糊大小
  shadowColor: '#666',  // 阴影颜色
  shadowOffsetX: 20,  // default: 0, 阴影水平方向上的偏移距离
  shadowOffsetY: 20,  // default: 0, 阴影垂直方向上的偏移距离
}
```
