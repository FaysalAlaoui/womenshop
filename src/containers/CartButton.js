import React, { Component } from 'react'

class CartButton extends Component{
	constructor(){
		super();
		this.state = {
			addedToCart: false,
			className: 'fas fa-shopping-bag'
		};
		this.handleCartClick= this.handleCartClick.bind(this);
	}
	handleCartClick(){
		this.setState({ addedToCart: !this.state.addedToCart });
		if(!this.state.addedToCart){
			this.setState({ className: 'cart-butt-add fas fa-shopping-bag' });
		}else {
			this.setState({ className: 'fas fa-shopping-bag' });
		}
	}
	render(){
		return(
			<button className="cart-button" onClick={this.handleCartClick}>
				<i className={this.state.className}></i>
			</button>
		);
	}
}
export default CartButton;