import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/ShopNavbar.css'

const ShopNavbar = ({ searchChange }) => {
	let state = {
		isOpen: false,
	};
	let toggleCollapse = () => {
		this.setState({ isOpen: !state.isOpen });
	};
	return(
		<Router>
	      <MDBNavbar color="black" dark expand="md">
	        <MDBNavbarBrand>
	          <strong className="logo-text">Women<span>Shop</span></strong>
	        </MDBNavbarBrand>
	        <MDBNavbarToggler onClick={toggleCollapse} />
	        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
	          <MDBNavbarNav className="main-nav-menu" left>
	            <MDBNavItem active>
	              <MDBNavLink to="#!">Home</MDBNavLink>
	            </MDBNavItem>
	            <MDBNavItem>
	              <MDBNavLink to="#!">Cloathes</MDBNavLink>
	            </MDBNavItem>
	            <MDBNavItem>
	              <MDBNavLink to="#!">Shoes</MDBNavLink>
	            </MDBNavItem>
	            <MDBNavItem>
	              <MDBNavLink to="#!">Bags</MDBNavLink>
	            </MDBNavItem>
	            <MDBNavItem>
	              <MDBDropdown>
	                <MDBDropdownToggle nav caret>
	                  <span className="mr-2">Accessories</span>
	                </MDBDropdownToggle>
	                <MDBDropdownMenu>
	                  <MDBDropdownItem href="#!">Rings</MDBDropdownItem>
	                  <MDBDropdownItem href="#!">Earnings</MDBDropdownItem>
	                  <MDBDropdownItem href="#!">Necklaces</MDBDropdownItem>
	                  <MDBDropdownItem href="#!">Bracelets</MDBDropdownItem>
	                  <MDBDropdownItem href="#!">Sunglasses</MDBDropdownItem>
	                </MDBDropdownMenu>
	              </MDBDropdown>
	            </MDBNavItem>
	          </MDBNavbarNav>
	          <MDBNavbarNav right>
	            <MDBNavItem>
	              <MDBFormInline waves>
	                <div className="md-form my-0">
	                   <div className="search-box pad2">
							<input 
								className="form-control mr-sm-2" 
								type="search" 
								placeholder="Search" 
								aria-label="Search"
								onChange={searchChange}
							 />
						</div>
	                </div>
	              </MDBFormInline>
	            </MDBNavItem>
	          </MDBNavbarNav>
	          <MDBNavbarNav className="shopping-menu" right>
	          	<MDBNavItem>
	          		<MDBNavLink calssName="heart-likes-list" to="#!">
	          			<i className="far fa-heart fa-2x"></i>
	          			<div className="hearts-counter"><span>1</span></div>
	          		</MDBNavLink>
	            </MDBNavItem>
	            <MDBNavItem>
		            <MDBNavLink className="cart-add-list" to="#!">
		            	<i className="fas fa-shopping-bag fa-2x"></i>
		            	<div className="cart-counter"><span>1</span></div>
		            </MDBNavLink>
	            </MDBNavItem>
	          </MDBNavbarNav>
	        </MDBCollapse>
	      </MDBNavbar>
		</Router>
	);
}
export default ShopNavbar;

// ShopNavbar definition class way
// class ShopNavbar extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			isOpen: false
// 		}
// 	}
// 	//making a function to check when toggleing the list dropdown
// 	toggleCollapse = () => { 
// 		this.setState({ isOpen: !this.state.isOpen });
// 	};

// 	render() {
// 		return (
// 			<Router>
// 		      <MDBNavbar color="black" dark expand="md">
// 		        <MDBNavbarBrand>
// 		          <strong className="white-text">Women<span>Shop</span></strong>
// 		        </MDBNavbarBrand>
// 		        <MDBNavbarToggler onClick={this.toggleCollapse} />
// 		        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
// 		          <MDBNavbarNav left>
// 		            <MDBNavItem active>
// 		              <MDBNavLink to="#!">Home</MDBNavLink>
// 		            </MDBNavItem>
// 		            <MDBNavItem>
// 		              <MDBNavLink to="#!">Cloathes</MDBNavLink>
// 		            </MDBNavItem>
// 		            <MDBNavItem>
// 		              <MDBNavLink to="#!">Shoes</MDBNavLink>
// 		            </MDBNavItem>
// 		            <MDBNavItem>
// 		              <MDBNavLink to="#!">Bags</MDBNavLink>
// 		            </MDBNavItem>
// 		            <MDBNavItem>
// 		              <MDBDropdown>
// 		                <MDBDropdownToggle nav caret>
// 		                  <span className="mr-2">Accessories</span>
// 		                </MDBDropdownToggle>
// 		                <MDBDropdownMenu>
// 		                  <MDBDropdownItem href="#!">Rings</MDBDropdownItem>
// 		                  <MDBDropdownItem href="#!">Earnings</MDBDropdownItem>
// 		                  <MDBDropdownItem href="#!">Necklaces</MDBDropdownItem>
// 		                  <MDBDropdownItem href="#!">Bracelets</MDBDropdownItem>
// 		                  <MDBDropdownItem href="#!">Sunglasses</MDBDropdownItem>
// 		                </MDBDropdownMenu>
// 		              </MDBDropdown>
// 		            </MDBNavItem>
// 		          </MDBNavbarNav>
// 		          <MDBNavbarNav right>
// 		            <MDBNavItem>
// 		              <MDBFormInline waves>
// 		                <div className="md-form my-0">
// 		                   <SearchBox />
// 		                </div>
// 		              </MDBFormInline>
// 		            </MDBNavItem>
// 		          </MDBNavbarNav>
// 		        </MDBCollapse>
// 		      </MDBNavbar>
//     		</Router>
// 		);
// 	}
// }