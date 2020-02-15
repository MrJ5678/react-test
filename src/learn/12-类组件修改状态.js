/**
 * 修改状态
 */


import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    state = {
        name: "zs"
    }

    render() {
        return (
            <div>哈哈-{this.state.name}</div>
        )
    }

    componentWillMount() {
        console.warn('componentWillMount');
    }
    componentDidMount() {
        console.warn('componentDidMount');
        this.setState({
            name: 'chunchun'
        })
    }
    componentDidUpdate() {
        console.warn('componentDidUpdate');
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))

