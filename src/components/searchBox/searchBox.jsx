import React, { Component } from 'react';
import './searchBox.scss';

export default class searchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
     
     handleChange (event) {
        this.setState({keyword: event.target.value});
    }
    render() {
        return (
            <div className="search-box">
                <input
                    aria-label="Search products"
                    className="form-control"
                    type="search"
                    placeholder="Search products"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
            </div>
            );
    }
}
