/**
 * 
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    render() {
        return (
            <div>
                <input defaultValue="zs" type="text"/>
            </div>
        )
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))