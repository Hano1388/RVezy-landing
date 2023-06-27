import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants';
import RVList from './RVList';

const App = () => {
    const [url, setUrl] = useState(API_URL);
    const { data, error, loading } = useFetch(url);

    console.log('>>>>> data: ', data);

    
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="App">
            <div className="search-rvs">Searches</div>
            <div className="listings">
                {data && (<RVList listOfRVs={data}/>)}
                <div className="rvs-on-map">Map</div>
            </div>
        </div>
    )
};

export default App;