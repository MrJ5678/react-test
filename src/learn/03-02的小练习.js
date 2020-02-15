import React from 'react'
import ReactDOM from 'react-dom'

let li1 = React.createElement('li', null, '春春1')
let li2 = React.createElement('li', null, '春春2')
let li3 = React.createElement('li', null, '春春3')
let ul = React.createElement('ul', {id: 'app'}, li1, li2, li3)

ReactDOM.render(ul, document.getElementById('root'))