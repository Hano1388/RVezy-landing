import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    if (data?.FeaturedRVs?.ListRVs && data?.PopularRVs?.ListRVs) {
        console.log('setting........');
        const { FeaturedRVs: { ListRVs }, PopularRVs: { ListRVs: popularRVs } } = data;
        setCombinedList([...popularRVs, ...ListRVs]);
    }

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data?.FeaturedRVs?.ListRVs && data?.PopularRVs?.ListRVs) {
                    console.log('setting........');
                    const { FeaturedRVs: { ListRVs }, PopularRVs: { ListRVs: popularRVs } } = data;
                    setData([...popularRVs, ...ListRVs]);
                }
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading}
}