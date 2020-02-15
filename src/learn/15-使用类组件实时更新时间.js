/**
 * 函数组件没有state，类组件有state
 */

import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         time: new Date()
    //     }
    // }
    state = {
        time: new Date()
    }
    render() {
        return (
            <div>
                <h3>时间更新</h3>
                <p>{this.state.time.toLocaleString()}</p>
            </div>
        )
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))