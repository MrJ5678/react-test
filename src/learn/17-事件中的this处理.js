/**
 * 处理this
 *      方法1） bind
 *      方法2） 属性初始化语法 onClick={this.fn2}  fn2 = () => {}
 *      方法3） 箭头函数    onClick={() => {this.fn3()}}
 */
import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.fn1 = this.fn1.bind(this)
  // }
  render() {
    // console.log(this)
    return (
      <div>
        {/* <button onClick={this.fn}>按钮</button> */}
        {/* <button onClick={this.fn1}>按钮1-bind</button> */}
        {/* <button onClick={this.fn2}>按钮2-使用属性初始化器</button> */}
        <button onClick={() => this.fn3()}>按钮3-箭头函数</button>
      </div>
    );
  }
  state = {
    name: "zs"
  };

  fn3() {
    console.log(this);
  };
  fn2 = () => {
    console.log(this);
  };
  fn1() {
    console.log(this);
  }
  fn() {
    console.log(this);
    // console.log('click...', this.state.name);
  }
}

ReactDOM.render(<Child />, document.getElementById("root"));

// function f() {
//     console.log(this)
// }

// let obj = {name: 'zs'}
// // 用bind  将 f 里面的 this 指向obj
// let newF = f.bind(obj)
// newF()
