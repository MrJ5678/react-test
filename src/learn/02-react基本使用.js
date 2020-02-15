import React from 'react'
import ReactDOM from 'react-dom'

// 1. 用React 创建对象
// 需求：
//      <div id='app'>hello react</div>
//  参数1: 元素名称， 参数2: 元素属性, 参数3: 内容
let el = React.createElement('div', {id: 'app'}, 'hello react123')
// 2. 渲染dom
//  参数1: react对象或组件， 参数2:渲染的位置
ReactDOM.render(el, document.getElementById('root'))