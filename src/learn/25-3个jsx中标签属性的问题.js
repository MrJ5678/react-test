/**
 * 属性问题
 * jsx 有两个属性
 * class 变为 className
 * for 变为 hemlFor
 * 行内样式  {{color: 'red'}} 并不是双花括号  里面是一个对象
 */
import React from "react";
import ReactDOM from "react-dom";
import "./css/demo1.css";

class Child extends React.Component {
  state = {
    name: "zs"
  };
  render() {
    let obj = {color: 'red',fontSize: '30px'}
    return (
      <div>
          <label htmlFor="ipt">用户名：</label>
        <input id="ipt" type="text" className="cls" />
        <p className="cls">p标签-类</p>
        <p>{this.state.name}</p>
        <p style={ obj }>p标签-行内样式</p>
      </div>
    );
  }
}

ReactDOM.render(<Child />, document.getElementById("root"));
