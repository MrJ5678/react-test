import React from "react";

class CommentForm extends React.Component {
    state = {
        username: '',
        content: ''
    }
  render() {
    return (
      <div>
        <div>
          评论人：
          <input
            name="username"
            value={this.state.username}
            onChange={this.handle.bind(this)}
            type="text"
          />
        </div>
        <div>
          评论内容：
          <textarea
            style={{ width: "110px" }}
            cols="30"
            rows="10"
            name="content"
            value={this.state.content}
            onChange={this.handle.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.add.bind(this)}>添加</button>
        </div>
      </div>
    );
  }
  add() {
    // 子传父 => 将username和content传给父
    const {username, content} = this.state
    this.props.add(username, content)
    this.setState({
      username: '',
      content: ''
    })
  }
  handle(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
}

export default CommentForm
