import React from 'react';
import ItemCard from './ItemCard'

const ItemCardList = ({ products }) => {
	return(
		<div className="section-wrapper col-md-12">
			<div className="row">
				{
					products.map((user, i) => {
						return (
							<ItemCard 
								key={i} 
								id={products[i].id} 
								img={products[i].images[0]} 
								title={products[i].title} 
								desc={products[i].desc} 
								price={products[i].price} 
								seller={products[i].seller}
							/>
						);
					})
				}
			</div>
		</div>
	);
}
export default ItemCardList;