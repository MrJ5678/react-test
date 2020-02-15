/**
 * react 组件
 *      1. 函数组件： 使用函数创建的组件
 *      2. 类组件： 使用类创建的组件
 */

 import React from 'react'
 import ReactDOM from 'react-dom'

//  let el = (
//      <div id='app'>
//         hello react
//      </div>
//  )

function Child() {
    return (
        <>
            <div id='app'>
                hello react
            </div>
            <p>p标签</p>
        </>
    )
}

//  ReactDOM.render(el, document.getElementById('root'))
 ReactDOM.render(<Child/>, document.getElementById('root'))