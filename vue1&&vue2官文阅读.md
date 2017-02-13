### 概述
* vue支持 数据驱动视图
* vue2 通过v-bind: 的形式绑定元素属性。
```
<span v-bind:title="message"></span>
```
* 一个组件实质上是一个拥有预定义选项的一个 Vue 实例：
```
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})
```

* 可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器???
```
var MyComponent = Vue.extend({
  // 扩展选项
})
// 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent()
```
* 所有的 Vue.js 组件其实都是被扩展的 Vue 实例 ???
* 每个 Vue 实例都会代理其 data 对象里所有的属性
* vue1生命周期：
  created、beforeCompile、complied、ready、beforeDestroy、destroyed
  vue2生命周期：
  beforeCreated、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed

### 模板语法
* vue1文本绑定，msg只处理单次插值，后面的数据变化就不会再引起插值更新了：
```<span>This will never change: {{* msg }}</span>```
vue2一次性地插值```:v-once```指令,```<span v-once>This will never change: {{ msg }}</span>```

* 三个{{{}}}、v-html输出html，但数据绑定会消失。
```<div>{{{ raw_html }}}</div>```
```<div v-html="rawHtml"></div>```

* 放在 Mustache 标签内的文本称为绑定表达式,每个绑定只能包含单个表达式.
* vue1 Mustache 标签可以用在 HTML 特性 (Attributes) 内,
```<div id="item-{{ id }}"></div>```
vue2 Mustache 不能在 HTML 属性中使用,
```<div v-bind:id="dynamicId"></div>```
* 指令参数```:参数```，```<a v-bind:href="url"></a>```,一个dom有哪些属性可以作为指令参数？？？
* 指令修饰符```.修饰符```,```<a v-bind:href.literal="/a/b/c"></a>```

### 计算属性 
* 计算属性，用在模板中，替代模板中的复杂的表达式逻辑。
* 计算属性默认只是getter，可设置setter。
```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
* 计算属性 vs method
计算属性是基于它的依赖缓存。当计算属性依赖的model没有改变，多次访问计算属性，会立即返回之前的计算结果。只有当计算属性依赖的model发生改变，计算属性才会触发。而method，多次访问，总会执行函数。

* 计算属性 vs watch
计算属性可以同时依赖多个model，当其中一个发生改变，计算属性就会触发，而用watch时，有几个依赖的model就要写几个watch函数。
当你想要在数据变化响应时做一些操作例如异步请求或开销较大的操作（？？？为什么开销较大的操作用watch）时，可以设置中间状态，watch会很方便。
* 计算属性是同步执行的么？异步执行会如何？？？

### class和style绑定
* class="{{ className }}"和 v-bind:class 两者只能选其一！
* v-bind:class 指令可以与普通的 class 特性共存
* v-bind:clas可以绑定计算属性，可以绑定数组，可以绑定三元表达式，可以在数组语法中使用对象语法。
* 当你在一个定制的组件上用到 class 属性的时候，这些类将被添加到根元素上面，这个元素上已经存在的类不会被覆盖。
```
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
<my-component v-bind:class="{ active: true }"></my-component>
渲染为：
<p class="foo bar active"></p>
```
* `v-bind:style` CSS 属性名可以用驼峰式（camelCase）或短横分隔命名（kebab-case）
* `v-bind:style` 可以绑定数组

### 条件渲染
* `v-if`、`v-if-else（vue2.1.0）`、`v-else`
* if切换多个元素，
```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
* `v-show`是改变的display属性，`v-show` 不支持 <template> 语法。
* `v-else` 指令给 `v-if` 或 `v-show` 添加一个 “else 块”。
* v-show用在组件上时:

```html
<custom-component v-show="condition"></custom-component>  // 不要这样用
<p v-else>这可能也是一个组件</p>  // 要这样用

<custom-component v-show="condition"></custom-component>
<p v-show="!condition">这可能也是一个组件</p>
```

* (vue2文档)，Vue 尝试尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。
```html
// 个模版由于使用了相同的元素，<input> 会被复用，仅仅是替换了他们的 placeholder
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>

// 不想复用元素时，可以在元素添加属性key，保证元素唯一性
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
* v-if vs v-show 
v-if 确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。v-show 切换display属性。v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。

### 列表渲染
* 为索引指定别名``` v-for="(index, item) in items"```
* vue1中`track-by`, 比较的track-by标记的key值对应的值，如果值一致则可以复用这个已有对象的作用域与 DOM 元素。
vue2中key，
```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

* 给数组设置值,
```
// vue1: $set()
example1.items.$set(0, { childMsg: 'Changed!'})
$set(items, []);
// vue2: set()
Vue.set(example1.items, indexOfItem, newValue)
```

* 删除数组元素，
```
// vue1 $remove()
this.items.$remove(item)
// 等同于
var index = this.items.indexOf(item)
if (index !== -1) {
  this.items.splice(index, 1)
}

// vue2 
example1.items.splice(indexOfItem, 1, newValue)  // 不支持
example1.items.splice(newLength)  // 支持
```

* 在遍历一个数组时，如果数组元素是对象并且对象用 `Object.freeze()` 冻结，你需要明确指定 track-by。在这种情况下如果 Vue.js 不能自动追踪对象，将给出一条警告。
* 在v-for中的$key，可取得对象的key值。
* v-for整数，
```
// 表示重复模板数次
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
