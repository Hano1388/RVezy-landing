import React from 'react';

const RVDetails = ({ rvDetails }) => {
    const { RVName } = rvDetails;
    return (
        <div className="rv-details">
            <img className="rv-img" src="https://cdn-d.rvezy.com/960x640x80/rv/prod/e2a975dfecd7426eaac63616a73c68d1_20230426013233059.webp" />
            <span className="rv-header">{RVName}</span>
            <span className="the-rest">The rest of the details....</span>
        </div>
    )
}

export default RVDetails;

