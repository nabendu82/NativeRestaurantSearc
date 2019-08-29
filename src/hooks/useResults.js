import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
            setResults(response.data.restaurants);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('chinese')
    }, [])

    return [searchApi, results, errorMessage];

}