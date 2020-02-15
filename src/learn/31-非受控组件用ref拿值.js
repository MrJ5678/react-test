/**
 * 非受控组件
 * 通过DOM操作拿到非受控组件里的值
 * 
 * 方式1: 通过引用
 *      1. 在constructor里创建一个引用
 *      2.  通过ref={}把引用和要绑定的表单绑定在一起
 *      3.  this.usernameRef.current.value获取内容
 * 
 * 方式2: 箭头函数
 *      ref={el => this.变量 = el}
 *      变量即为目标DOM节点
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    constructor(props) {
        super(props)

        // 第一步：创建一个引用
        this.usernameRef = React.createRef()
    }
    render() {
        return (
            <div>
                <input ref={el => (this.ipt = el)} type="text"/><br/>
                <button ref={el => (this.btn = el)} onClick={this.fn.bind(this)}>按钮</button>
            </div>
        )
    }
    fn() {
        // console.log(this.usernameRef.current.value);
        console.log(this.btn, this.ipt);
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))