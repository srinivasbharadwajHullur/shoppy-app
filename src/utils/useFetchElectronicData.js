import React,{useState, useEffect } from 'react';
import axios from 'axios';
import {ELECTRONICS_CATEGORY_URI} from '../utils/constants';


const useFetchElectronicData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [electronicItems, setElectronicItems] = useState([]);
    const fetchCategoriesData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(ELECTRONICS_CATEGORY_URI);
            setElectronicItems(response.data);
            setLoading(false)
        } catch (error) {
            setError("Error fetching Electronics items", error);
            setLoading(false);
        }
    }
    useEffect(() => {
      fetchCategoriesData()
    },[])
  return {loading, error, electronicItems}
}

export default useFetchElectronicData;