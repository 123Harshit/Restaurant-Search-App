import React,{useState, useEffect} from 'react'
import yelp from '../api//yelp'

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchAPI = async(searchTerm) =>{       
    try{
        const response = await yelp.get('/search',{
        params:{
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        //console.log(response.data.businesses)
        }catch(err){
            setErrorMessage('Something Went Wrong')
            console.log(err)
        }
    };

    useEffect(() => {
        searchAPI('burger');
    }, []);
    return [searchAPI, results, errorMessage];
}