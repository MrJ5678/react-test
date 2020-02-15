/**
 * 需求： 将father 的状态 color传递给sun
 */

import React from "react";
import ReactDOM from "react-dom";
import './css/02.css'

class Father extends React.Component {
  state = {
      color: 'red'
  };
  render() {
    return (
      <div className='fa'>
        父组件
        <Son color={this.state.color}/>
      </div>
    );
  }
}
class Son extends React.Component {
  state = {};
  render() {
    return (
      <div className='son'>
        子组件
        <Sun color={this.props.color}/>
      </div>
    );
  }
}
class Sun extends React.Component {
  state = {};
  render() {
    return <div style={{color: this.props.color}} className='sun'>孙组件</div>;
  }
}

ReactDOM.render(<Father />, document.getElementById("root"));
