import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const Search = ({ onFormSubmit, term, setTerm, actions}) => {
    const onInputChange = event => {
        setTerm(event.target.value);
        // console.log(term);
    }

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term, actions);
    }

    const clearInput = event => {
        document.querySelector('#search-field').value = '';
        setTerm('');
        // console.log(term);
    }

    return (
        <Col xs={4} sm={4} md={4} lg={4}>
            <div className="input-group">
                <form onSubmit={onSubmit}>
                    <input
                        id="search-field"
                        type="text"
                        className="form-control"
                        placeholder="Search item name"
                        onChange={onInputChange}
                    />
                </form>
                <span className="input-group-btn">
                    <button
                        className="btn btn-info"
                        type="button"
                        onClick={clearInput}
                    >
                        Clear
                    </button>
                </span>
            </div>
        </Col>
    );
}

export default Search;