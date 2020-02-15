import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component{
    render() {
        return (
            <div>
                <p>这是类组件</p>
            </div>
        )
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))