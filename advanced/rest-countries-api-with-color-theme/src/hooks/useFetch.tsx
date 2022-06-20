import React from 'react'

interface FetchType {
    url: string;
    options?: {};    
}

function useFetch() {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    const request = React.useCallback(async (url: string, options?: {}) => {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);

            response = await fetch(url, options);
            json = await response.json();

            if(response.ok === false) throw new Error(json.message);
        } catch (err: any) {
            json = null;
            setError(err.message);
        } finally {
            setData(json);
            setLoading(false);
            return { response, json };
        }

    }, []);
    
  return { data, loading, error, request }
}

export default useFetch