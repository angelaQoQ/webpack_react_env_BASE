import React , {Component} from 'react'

import ReactDOM from 'react-dom'

function tick(){
	const element = (
		<div>
			<h1> 计时 </h1>
			<h2> 现在时间是: {(new Date().toLocaleTimeString())} </h2>
		</div>
	)
	
	ReactDOM.render(element , document.querySelector('#container'))
}

window.setInterval(tick , 1000)