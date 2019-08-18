import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import ItemCardList from '../components/ItemCardList';
import products from '../shopDB';
import ShopNavbar from '../containers/ShopNavbar';
import '../css/App.css'


class App extends Component{
	constructor(){
		super()
		this.state = {
			products: products,
			searchfield: ''
		}
	}
	//making a function to check when searchfield change
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render(){
		const filteredProducts = this.state.products.filter(products => {
				return products.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		return(
				<div className="page-wrapper tc">
					<ShopNavbar searchChange={this.onSearchChange}/>
					<div className="container">
						<div className="header-wrapper">
						<h1>Welcome to WomenShop</h1>
						<h3>The 1st Choice of Women for Online Shopping</h3>
						</div>
						<div className="content-wrapper">
							<div className="search-section">
								<SearchBox searchChange={this.onSearchChange}/>
							</div>
							<ItemCardList products={filteredProducts} />
						</div>
					</div>
				</div>
		);
	}
}

export default App;