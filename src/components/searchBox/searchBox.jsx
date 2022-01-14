import React from 'react'
import './searchBox.scss';


export default function searchBox({onChange}) {
    return (
            <div className="search-box">
                <input
                    aria-label="Search products"
                    className="form-control"
                    type="search"
                    placeholder="Search products"
                    onChange={onChange}
                />
            </div>
            );
}
