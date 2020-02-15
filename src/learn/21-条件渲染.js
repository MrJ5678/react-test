/**
 * 条件渲染
 *  需求1:  是否登录
 *  需求2: 分数判断
 */

import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    state = {
        score: 98
    }
    render() {
        let content = ''
        if (this.state.score >= 90) {
            content = 'A'
        }else {
            content = 'B'
        }
        return (
            <div>
                <p>{content}</p>
            </div>
        )
    }
}

// class Child extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false
//     };
//   }
//   //   state = {
//   //     isLogin: false
//   //   };

//   render() {
//     if (this.state.isLogin) {
//       return <div>登录了</div>;
//     } else {
//       return <div>未登录</div>;
//     }
//   }
// }

ReactDOM.render(<Child />, document.getElementById("root"));
