/**
 * 其它表单怎么处理受控组件
 * input :text
 * textarea
 * select
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    state = {
        username: 'zs',
        content: '评论内容',
        city: 'hz'
    }
    render() {
        return (
            <form>
                用户名：<input type="text" value={this.state.value} onChange={(e) => this.handleInput(e)}/>
                <br/>
                文本域：<textarea cols="30" rows="10" value={this.state.content} onChange={(e) => this.handleTextArea(e)}/>
                <br/>
                城市：
                <select value={this.state.city} onChange={(e) => this.handleSelect(e)}>
                    <option value="bj">北京</option>
                    <option value="sh">上海</option>
                    <option value="hz">杭州</option>
                </select>
            </form>
        )
    }
    handleInput(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleTextArea(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSelect(e) {
        this.setState({
            city: e.target.value
        })
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))