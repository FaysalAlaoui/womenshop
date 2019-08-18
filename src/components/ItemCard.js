import React from 'react';
// import ItemCardImage from './ItemCardImage';
// import ItemCardInfo from './ItemCardInfo';
import ItemCardShopBar from './ItemCardShopBar';
import '../css/ItemCard.css';

const ItemCard = ({ img, title, price, seller }) => {
	return(
		<div className="ic-container col-xs-12 col-sm-6 col-md-4 ">
			<div className="ic-wrapper ma1 pa3 bw2 shadow-5">
				<div className="ic-image-wrapper">
					<div className="ic-new">
						<span>NEW</span>
					</div>
					<div className="ic-quick-view">
						<span>Quick View</span>
					</div>
					<div className="ItemCardSlider">
						<img alt={title} src={require(`../img/${img}`)}/>
					</div>
				</div>
				<div className="ItemCardInfoWrapper">
					<ItemCardShopBar price={price}/>
					<div className="ItemCardTitle"> {title} </div>
					<div className="ItemCardDesc"> {seller} </div>
				</div>
			</div>
		</div>
	);
}
export default ItemCard;



































