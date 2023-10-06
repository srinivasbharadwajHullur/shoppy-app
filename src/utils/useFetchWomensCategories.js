import React,{useState, useEffect } from 'react';
import axios from 'axios';
import {WOMENS_CATEGORY_URI} from '../utils/constants';

const useFetchWomensCategoriesData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [womensItems, setWomensItems] = useState([]);
    const fetchWomensShoppingData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(WOMENS_CATEGORY_URI);
            setWomensItems(response.data);
            setLoading(false)
        } catch (error) {
            setError("Error fetching Womens items", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchWomensShoppingData()
    },[])
  return {loading, error, womensItems}
}

export default useFetchWomensCategoriesData