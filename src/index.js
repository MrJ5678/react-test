/**
 * static 静态属性和静态方法
 */

//  class Person {
//     static say() {
//         console.log('我是Person的静态方法')
//      }
//  }

//  Person.say = function () {
//      console.log('我是Person的静态方法');
     
//  }

//  Person.say()

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Father extends React.Component {
    state = {
        name: 'zs'
    }
    render() {
        return (
            <div>
                父组件：
                <Son msg="ls" fn={this.pfn.bind(this)}/>
            </div>
        )
    }
    pfn() {
        console.log('父组件数据')
    }
}
class Son extends React.Component {
    static defaultProps = {
        msg: 'zs'
    }
    static propTypes = {
        msg: PropTypes.string.isRequired,
        fn: PropTypes.func
    }
    state = {}
    render() {
        return (
            <div>
                子组件：{this.props.msg}
                <br/>
                <button onClick={this.fn.bind(this)}>按钮</button>
            </div>
        )
    }
    fn() {
        this.props.fn()
    }
}

// Son.defaultProps = {
//     msg: 'zs'
// }
// Son.propTypes = {
//     msg: PropTypes.string.isRequired,
//     fn: PropTypes.func
// }

ReactDOM.render(<Father/>, document.getElementById('root'))

