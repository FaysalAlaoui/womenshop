import React from 'react'
import ItemCardSlider from './ItemCardSlider'

const ItemCardImage = (props) => {
	return(
		<div className="ic-image-wrapper">
			<div className="ic-new">
				<span>NEW</span>
			</div>
			<div className="ic-quick-view">
				<span>Quick View</span>
			</div>
			<div className="ItemCardSlider">
				<img alt={props.title} src='' />
			</div>
		</div>
	);
}
export default ItemCardImage;