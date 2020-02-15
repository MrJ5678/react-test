/**
 * 评论案例
 *
 */

import React from "react";
import ReactDOM from "react-dom";

function CommentItem(props) {
    // console.log(props);
    
  return (
    <li>
      <p>评论人: {props.name} </p>
      <p>评论内容: {props.content}</p>
    </li>
  );
}

class CommentList extends React.Component {
  state = {
    list: [
      { id: 1, name: "纯纯", content: "今天好冷哦" },
      { id: 2, name: "霞霞", content: "今天好热哦" },
      { id: 3, name: "求求", content: "今天好凉哦" }
    ]
  };
  render() {
    return (
      <div>
        <h3>评论列表如下</h3>
        <ul>
          {this.state.list.map(item => {
            return <CommentItem name={item.name} content={item.content} key={item.id}/>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<CommentList />, document.getElementById("root"));
