import React, { Component } from 'react'

class HeartButton extends Component{
	constructor(){
		super();
		this.state = {
			liked: false,
			className: 'far fa-heart'
		};
		this.handleHeartClick= this.handleHeartClick.bind(this);
	}
	handleHeartClick(){
		this.setState({ liked: !this.state.liked });
		if(!this.state.liked){
			this.setState({ className: 'heart-butt-like fas fa-heart' });
		}else {
			this.setState({ className: 'far fa-heart' });
		}
	}
	render(){
		return(
			<button className="heart-button" onClick={this.handleHeartClick}>
				<i className={this.state.className}></i>
			</button>
		);
	}
}
export default HeartButton;