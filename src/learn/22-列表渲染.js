import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    state = {
        list1: ['zs', 'ls', 'ww'],
        list2: [
            {id: 1, name: '春'},
            {id: 2, name: '夏'},
            {id: 3, name: '秋'}
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.list2.map(item => {
                        return <p key={item.id}>{item.id}-{item.name}</p>
                    })
                }
            </div>
        )
    }
    render1() {
        return (
            <div>
                {
                    this.state.list1.map(item => {
                        return  <p>{item}</p>
                    })
                }
            </div>
        )
    }
} 

ReactDOM.render(<Child/>, document.getElementById('root'))