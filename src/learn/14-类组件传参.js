/**
 * 
 */

import React from 'react'
import ReactDOM from 'react-dom'

function Child(props) {
    return (
        <div>函数组件-{props.name}-{props.age}</div>
    )
}


// class Child extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
        
//     }


//     render() {
//         // console.log(this.props)
//         return (
//             <div>类组件-{this.props.name}-{this.props.age}</div>
//         )
//     }
// }

ReactDOM.render(<Child name="chuncu" age={30}/>, document.getElementById('root'))