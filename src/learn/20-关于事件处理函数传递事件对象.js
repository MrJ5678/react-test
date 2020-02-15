/**
 * 获取事件对象
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    render() {
        return (
            <button onClick={ (e) => this.handleClick(123, e)}>按钮</button>
        )
    }

    handleClick(num, e) {
        console.log(num, e.target);
    }

}

ReactDOM.render(<Child/>, document.getElementById('root'))