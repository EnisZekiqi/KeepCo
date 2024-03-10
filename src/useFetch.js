
import { useEffect ,useState } from 'react';


  const useFetch = () => {
    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async (url, options) => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setFetchedData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    const postData = async (url, data, options) => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          ...options,
        });
        const responseData = await response.json();
        setFetchedData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    return { fetchedData, loading, error, fetchData, postData };
  };
 
export default useFetch;