import React from "react";

import CommentForm from "./components/CommentForm.jsx";
import CommentList from "./components/CommentList.jsx";

class App extends React.Component {
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
        <CommentForm add={this.pAdd.bind(this)} />
        <CommentList
          list={this.state.list}
          delList={this.pDelList.bind(this)}
        />
      </div>
    );
  }
  pAdd(username, content) {
    let addData = {
      id: +new Date(),
      username,
      content
    };
    this.setState(state => ({
      list: [addData, ...state.list]
    }));
  }
  pDelList(id) {
    this.setState(state => {
      return {
        list: state.list.filter(item => item.id !== id)
      };
    });
  }
}

export default App;
