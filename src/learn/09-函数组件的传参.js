
/**
 * 1.传参 ： 在组件标签里 添加自定义属性  name='zs'  age={30}
 * 2.接收参数 ： Child(props){}  props 是一个对象，对象里面传过来的参数
 * props  和vue一样  遵循单向数据流
 */


import React from 'react'
import ReactDOM from 'react-dom'

function Child(props) {
    console.log(props);

    return (
        <div>
            <div>姓名- {props.name}</div>
            <p>年龄- {props.age}</p>
        </div>
    )
}

ReactDOM.render(<Child name="zs" age={30}/>, document.getElementById('root'))