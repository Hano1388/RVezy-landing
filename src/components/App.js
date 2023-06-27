import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants';
import RVList from './RVList';
import Pagination from './Pagination';

const App = () => {
    const [url, setUrl] = useState(API_URL);
    const { data, error, loading } = useFetch(url);

    const [searchFilters, setSearchFilters] = useState({
        drivable: false,
        towable: false,
        price: null
    });

    const onSearchFilterToggle = (e) => {
        const updatedField = e.target.name;
        console.log(updatedField);
        const newFilters = {...searchFilters, [updatedField]: !searchFilters[updatedField] };
        setSearchFilters(newFilters);
    }

    const onApplySearches = () => {
        // Note: I am aware that for drivable and towable we have a bunch of options but because
        //  I am running out of time, I am setting just one categoty of each to true or false
        const newUrl = new URL(url);
        searchFilters.drivable ? newUrl.searchParams.set('ClassA', true) : newUrl.searchParams.delete('ClassA');
        searchFilters.towable ? newUrl.searchParams.set('FifthWheel', true) : newUrl.searchParams.delete('FifthWheel');
        setUrl(newUrl);

    }
    
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="App">
            <div className="search-rvs">
                <label>
                    <input type="checkbox" name="drivable" onChange={onSearchFilterToggle} checked={searchFilters.drivable}/>
                    Drivable
                </label>
                <label>
                    <input type="checkbox" name="towable" onChange={onSearchFilterToggle} checked={searchFilters.towable} />
                    Towable
                </label>
                <label>
                    <input type="text" name="price" />
                    Price
                </label>
                <button onClick={onApplySearches}>Apply</button>
            </div>
            <div className="listings">
                {data && (<RVList listOfRVs={data}/>)}
                <div className="rvs-on-map">Map</div>
            </div>
            <Pagination url={url} setUrl={setUrl}/>
        </div>
    )
};

export default App;