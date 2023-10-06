import React,{useState, useEffect } from 'react';
import axios from 'axios';
import {JEWELLERY_CATEGORY_URI} from '../utils/constants';


const useFetchJewelleryCategoryData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [jewelleryItems, setJewelleryItems] = useState([]);
    const fetchCategoriesData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(JEWELLERY_CATEGORY_URI);
            setJewelleryItems(response.data);
            setLoading(false)
        } catch (error) {
            setError("Error fetching Jewellery items", error);
            setLoading(false);
        }
    }
    useEffect(() => {
      fetchCategoriesData()
    },[])
  return {loading, error, jewelleryItems}
}

export default useFetchJewelleryCategoryData;