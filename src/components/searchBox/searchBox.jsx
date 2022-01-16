import React from 'react'
import './searchBox.scss';


export default function searchBox({keyword, onChange}) {
    return (
			<div className="search-box">
				<input
					aria-label="Search products"
					className="form-control"
					id="searchBox"
					data-testid="searchBox"
					type="search"
					placeholder="Search products"
					value={keyword}
					onChange={onChange}
				/>
			</div>
		);
}
