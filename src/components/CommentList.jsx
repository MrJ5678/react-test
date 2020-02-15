import React from "react";
import './CommentList.css'
class CommentList extends React.Component {
    state = {
        
    }
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(item => (
              <li key={item.id}>
                <p>评论人：{item.name}</p>
                <p>评论内容：{item.content}</p>
                <button onClick={this.delList.bind(this, item.id)}>x</button>
              </li>
          ))}
        </ul>
      </div>
    );
  }
  delList(id) {
    // console.log(id)
    this.props.delList(id)
  }
}

export default CommentList
