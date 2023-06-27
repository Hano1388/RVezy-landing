import React from 'react';
import RVDetails from './RVDetails';

const RVList = ({ listOfRVs }) => {
    return (
        <div className="rv-list">
            {listOfRVs.map((rv, i) => (
                <RVDetails rvDetails={rv} key={rv.AliasName} />
            ))}
        </div>
    )
}

export default RVList;