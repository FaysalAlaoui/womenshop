import React from 'react';
import '../css/ItemCardShopBar.css';
import HeartButton from '../containers/HeartButton';
import CartButton from '../containers/CartButton';

const ItemCardShopBar = (props) => {
	return(
		<div className="ItemCardShopBar">
			<div className="ItemShopIcons">
				<ul>
					<li><HeartButton /></li>
					<li><CartButton /></li>
					<li><button><i class="fas fa-share fa"></i></button></li>
				</ul>
			</div>
			<div className="ItemShopPrice">
				<p><span>$</span>{props.price}</p>
			</div>
		</div>
	);
}
export default ItemCardShopBar;