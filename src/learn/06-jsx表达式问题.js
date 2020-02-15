import React from "react";
import ReactDOM from "react-dom";

let name = '纯纯1号'
let ul = (
    <ul className='ls'>
        <li>纯纯</li>
        {/* 读取变量 */}
        <li>{name}</li>
        {/* 运算 */}
        <li>{name + '111'}</li>
        {/* 三元运算 */}
        <li>{true ? '真' : '假'}</li>
        {/* 调用方法 */}
        <li>{['zs', 'ls', 'ww'].join('-')}</li>
    </ul>
)

ReactDOM.render(ul, document.getElementById('root'))