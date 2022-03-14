import React from 'react';

const Pagination = ({actionsPerPage, totalActions, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalActions / actionsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        // <div>
        <nav>
            <ul className="pagination">
                <li>
                    <i className="right arrow"></i>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        // </div>
    );

}

export default Pagination;
