/**
 * 表单
 *      受控组件：给input添加value值，input就是受控组件
 *      还要处理v ==> m 
 *
 *      非受控组件：
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    state = {
        username: 'zs'
    }
    render() {
        return (
            <form>
                <input type='text' value={this.state.username} onChange={(e) => this.handleInput(e)}></input>
            </form>
        )
    }
    handleInput(e) {
        this.setState({
            username: e.target.value
        })
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))