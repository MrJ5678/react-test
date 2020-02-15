/**
 * 函数组件和类组件的区别
 * 
 * 函数组件： 无状态
 * 类组件： 有状态
 * 
 *      2种写法：
 *          1）constructou() {
 *              super()
 *              this.state = {
 *                  foo: 'bar'
 *              }
 *            }
 *          
 *          2)属性初始化语法
 *              state = {
 *                  name: 'zs'
 *              }
 *            
 */


import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     name: 'zs',
        //     age: 30
        // }
    }
    state = {
        name: '纯纯',
        age: 11
    }
    render() {
        return (
            <div>哈哈-{this.state.name}{this.state.age}</div>
        )
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))
