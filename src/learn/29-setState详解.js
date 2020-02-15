/**
 * setState 详解
 * 修改状态用this.setState()
 * setState 是异步
 *  setState((function, function))
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    state = {
        name: 'zs',
        counter: 1
    }
    render() {
        return (
            <>
                <div>hah1-{this.state.counter}</div>
                <button onClick={this.fn.bind(this)}>按钮</button>
            </>
        )
    }
    fn() {
        this.setState((state, props) => {
            return {
                counter : state.counter + 1
            }
        })
    }
    fn1() {
        this.setState({
            name: 'ls'
        }, () => {
            console.log(this.state.name);
        })
        
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))