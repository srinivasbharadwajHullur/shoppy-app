import React,{useState, useEffect } from 'react';
import axios from 'axios';
import {MENS_CATEGORY_URI} from '../utils/constants';


const useFetchMensCategoriesData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [mensItems, setMensItems] = useState([]);
    const fetchCategoriesData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(MENS_CATEGORY_URI);
            setMensItems(response.data);
            setLoading(false)
        } catch (error) {
            setError("Error fetching Mens items", error);
            setLoading(false);
        }
    }
    useEffect(() => {
      fetchCategoriesData()
    },[])
  return {loading, error, mensItems}
}

export default useFetchMensCategoriesData