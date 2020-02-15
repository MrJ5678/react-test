/**
 * 属性初始化语法绑定的事件函数不能传参！！
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    render() {
        return (
            <button onClick={(e) => this.handleClick(123, e)}>按钮</button>
        )
    }
    handleClick(num, e) {
        console.log("get:", num, e);
        
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))