import React from 'react'
import ReactDOM from 'react-dom'

class Comment extends React.Component {
    state = {
        list: [
            { id: 1, name: "纯纯", content: "今天好冷哦" },
            { id: 2, name: "霞霞", content: "今天好热哦" },
            { id: 3, name: "求求", content: "今天好凉哦" }
        ],
        username: '',
        content: ''
    }
    render() {
        return (
            <div>
                {/* 表单 */}
                <div>
                    <div>评论人：<input name='username' value={this.state.username} onChange={this.handle.bind(this)} type="text"/></div>
                    <div>评论内容：<textarea style={{width: '110px'}} cols="30" rows="10" name='content' value={this.state.content} onChange={this.handle.bind(this)}/></div>
                    <div><button onClick={this.add.bind(this)}>按钮</button></div>
                </div>
                {/* 列表 */}
                <div>
                    <ul>
                        {
                            this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        <p>评论人：{item.name}</p>
                                        <p>评论内容：{item.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    add() {
        let addData = {
            id: +new Date(),
            name: this.state.username,
            content: this.state.content
        }
        this.setState((state) => {
            return {
                list: [addData, ...state.list],
                username: '',
                content: ''
            }
        })
    }
    handle(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
}

ReactDOM.render(<Comment/>, document.getElementById('root'))