import React from 'react'
import ReactDOM from 'react-dom'

// let el = React.createElement('div', {id: 'app'}, 'hello react')
let el = <div id='app'>hello react</div>

ReactDOM.render(el, document.getElementById('root'))