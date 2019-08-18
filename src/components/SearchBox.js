import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return(
		<form class="form-search Ripple-parent">
			<div class="md-form my-0">
				<div className="search-box pad2">
					<input 
						className="form-control mr-sm-2 tc" 
						type="search" 
						placeholder="Search Shop" 
						aria-label="Search"
						onChange={searchChange}
					 />
				</div>
			</div>
		</form>
	);
}
export default SearchBox;