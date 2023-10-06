import React,{useState, useEffect} from 'react';
import {FEATURED_ITEMS_URI} from './constants';
import axios from 'axios';

const useFetchFeaturedItems = () => {
    const [featuredItems, setFeaturedItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchFeaturedItems = async () => {
        setLoading(true);
        try {
            const response = await axios.get(FEATURED_ITEMS_URI);
            setFeaturedItems(response.data);
            setLoading(false);
            setError("")
        } catch (error) {
            setError("Failed to fetch featured items please try again");
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchFeaturedItems()
    },[])
  return {loading, featuredItems, error}
}

export default useFetchFeaturedItems