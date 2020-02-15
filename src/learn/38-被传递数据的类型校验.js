/**
 * 属性类型
 * 1. import PropTypes from 'prop-types'
 * 2. 组件.proptypes = {
 *         被传递数据的key: PropTypes.数据类型
 *    }
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 引入校验模块
import PropTypes from 'prop-types'


class Father extends React.Component {
    state = {}
    render() {
        return (
            <div>
                父组件：
                <Son msg='ma' name='ls' fn={this.pfn}/>
            </div>
        )
    }
    pfn() {
        console.log('父组件方法')
    }
}
// son 接受属性 校验应该在son组件中进行
class Son extends React.Component {
    state = {}
    render() {
        return (
            <div>
                子组件：{this.props.msg}-{this.props.name}
                <br/>
                <button onClick={this.f.bind(this)}>按钮</button>
            </div>
        )
    }
    f() {
        this.props.fn()
    }
}
Son.defaultProps = {
    name: '这是默认值'
}

//  类型检查
Son.propTypes = {
    msg: PropTypes.string,
    fn: PropTypes.func,
    name: PropTypes.string.isRequired
}

ReactDOM.render(<Father />, document.getElementById('root'))