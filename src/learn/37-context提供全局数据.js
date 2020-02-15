/**
 * 需求： 将father 的状态 color传递给sun
 *
 * 使用Context解决传值问题
 */

import React from "react";
import ReactDOM from "react-dom";
import "./css/02.css";

// 第一步创建context
// context里面有两个组件 Provider 和 Consumer
// Provider： 提供者
// Consumer： 使用者
const { Provider, Consumer } = React.createContext();

class Father extends React.Component {
  state = {
    color: "red"
  };
  render() {
    return (
      <Provider value={this.state.color}>
        <div className="fa">
          父组件
          <Son />
        </div>
      </Provider>
    );
  }
}
class Son extends React.Component {
  state = {};
  render() {
    return (
      <div className="son">
        子组件
        <Sun />
      </div>
    );
  }
}
class Sun extends React.Component {
  state = {};
  render() {
    return (
        <Consumer>
            {value => <div style={{color: value}} className="sun">孙组件</div>
            }
            
        </Consumer>
    )
  }
}

ReactDOM.render(<Father />, document.getElementById("root"));
