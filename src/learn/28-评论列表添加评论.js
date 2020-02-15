/**
 * 表单控件优化
 *
 */
import React from "react";
import ReactDOM from "react-dom";

class CommentList extends React.Component {
  state = {
    list: [
      { id: 1, name: "吃大桌", content: "倾听" },
      { id: 2, name: "走亲戚", content: "雨天" },
      { id: 3, name: "吃鸡", content: "雪天" }
    ],
    name: "",
    content: ""
  };
  render() {
    return (
      <div>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handle.bind(this)}
            type="text"
          />
          <br />
          <textarea
            cols="30"
            rows="10"
            name="content"
            value={this.state.content}
            onChange={this.handle.bind(this)}
          />
          <br />
          <button onClick={this.add.bind(this)}>添加</button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <p>评论内容：{item.name}</p>
                <p>评论人：{item.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  add() {
    const id = this.state.list.length + 1;
    this.state.list.unshift({
      id,
      name: this.state.name,
      content: this.state.content
    })
    // console.log(this.state.list);
    
    this.setState({
        list: this.state.list,
        name: '',
        content: ''
    })
  }
}

ReactDOM.render(<CommentList />, document.getElementById("root"));
