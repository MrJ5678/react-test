import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    render() {
        return (
            <button onClick={this.fn}>按钮</button>
        )
    }
    fn() {
        console.log('click...');
        
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))