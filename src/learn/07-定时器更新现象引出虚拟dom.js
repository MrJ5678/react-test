import React from "react";
import ReactDOM from "react-dom";



function render() {
    let el = (
        <div>
            <h3>时间更新</h3>
            <p>{new Date().toLocaleString()}</p>
        </div>
    )

    ReactDOM.render(el, document.getElementById('root'))
}

setInterval(() => {
    render()
}, 1000);

/**
 * 虚拟DOM
 * react 数据发生变化时 通过虚拟DOM更新
 */