import React from 'react';
import { updateQuery } from '../utils';

const Pagination = ({ url, setUrl }) => {
    const urlParams = new URLSearchParams(url);
    const CurrentPage = urlParams.get('CurrentPage');

    const handlePrev = () => {
        const urlWithUpdatedQuery = updateQuery(url, 'CurrentPage', CurrentPage - 1);
        setUrl(urlWithUpdatedQuery);
    }

    const handleNext = () => {
        const urlWithUpdatedQuery = updateQuery(url, 'CurrentPage', CurrentPage + 1);
        setUrl(urlWithUpdatedQuery);
    }

    return (
        <div className="pagination">
            <button className="previous" onClick={handlePrev}>Prev</button>
            <button className="next" onClick={handleNext}>Next</button>
        </div>
    )
};

export default Pagination;