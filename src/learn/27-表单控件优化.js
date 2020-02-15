/**
 * 表单控件优化
 * 
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
                用户名：<input type="text" name="username" value={this.state.value} onChange={(e) => this.handle(e)}/>
                <br/>
                文本域：<textarea cols="30" rows="10" name="content" value={this.state.content} onChange={(e) => this.handle(e)}/>
                <br/>
                城市：
                <select name="city" value={this.state.city} onChange={(e) => this.handle(e)}>
                    <option value="bj">北京</option>
                    <option value="sh">上海</option>
                    <option value="hz">杭州</option>
                </select>
            </form>
        )
    }
    handle(e) {
        console.log(e.target.value, e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleInput(e) {
    //     this.setState({
    //         username: e.target.value
    //     })
    // }
    // handleTextArea(e) {
    //     this.setState({
    //         content: e.target.value
    //     })
    // }
    // handleSelect(e) {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }
}

ReactDOM.render(<Child/>, document.getElementById('root'))