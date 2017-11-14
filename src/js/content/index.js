//import React, { Component } from "react";
//import { render } from "react-dom";
//import "whatwg-fetch";
//import "../css/reset.scss";
//import "../css/content.scss";
//
//
//class ContentPage extends Component {
//	constructor(props){
//		super(props);
//		this.state={
//			num: num
//		}
//	}
//	render(){
//	    return (
//	    		<div>
//	    			<div className="header">
//		     	 	<h3>Content{this.state.num}<button className="right" onClick={this.onChangeNum.bind(this)}>Submit</button></h3>	 	
//	     	 	</div>
//	      	</div>
//	    )
//	}
//	onChangeNum(){
//		fetch(`${basepath}/user/dologout`,{
//			method:"POST",
//			headers:{
//				"Content-Type": "application/json"
//			},
//			body:JSON.stringify({
//				username:"qqqqq",
//				password:"123456"
//			}),
//			mode:"cors"
//		}).then(res => res.json())
//		.then((result) =>{
//			console.log(result);
//		})
//		this.setState({
//			num: Math.trunc(10*(Math.random()-0.5))
//		});
//	}
//}
//
//render(<ContentPage />,document.getElementById('app'));

import Vue from 'vue';

import app from './app.vue';
import store from './store.js';

new Vue({
	el:"#app",
	store,
	render: h=>h(app)
});

//new Vue({
//	data:{
//		basepath: basepath,
//		staticpath: staticpath,
//		num: num
//	},
//	render: h => h(app)
//}).$mount("#app")
