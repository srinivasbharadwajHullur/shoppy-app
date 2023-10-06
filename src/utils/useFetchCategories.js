import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {CATEGORIES_URI} from '../utils/constants';


const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await axios.get(CATEGORIES_URI);
            setCategories(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError("Error getting categories, please try again")
        }
    }
    useEffect(() => {
        fetchCategories()
    },[])
  return {loading, categories, error}
}

export default useFetchCategories