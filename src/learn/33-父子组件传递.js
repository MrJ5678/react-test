/**
 * 组件通讯
 * 父 => 子
 *      1.父组件通过定义属性传递数据
 *      2.子组件通过this.props接受数据对象（只读）
 * 子 => 父
 * 
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Father extends React.Component {
    state = {
        pmsg: '父组件数据'
    }
    render() {
        return (
            <div>父组件
                <Child msg={this.state.pmsg} fn={this.pfn}/>
            </div>
        )
    }
    pfn(res) {
        console.log(res)
    }
}
class Child extends React.Component {
    state = {
        cmsg: '子组件数据'
    }
    render() {
        console.log(this.props);
        return (
            <>
                <div>子组件-{this.props.msg}</div>
                <button onClick={this.f.bind(this)}>子组件按钮</button>
            </>
        )
    }
    f() {
        // console.log(this.props.fn);
        this.props.fn(this)
    }
}

ReactDOM.render(<Father/>, document.getElementById('root'))