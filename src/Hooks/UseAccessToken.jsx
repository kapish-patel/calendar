import { useState, useEffect } from 'react';
import getAccessToken from '../Api/Auth';

/**
 * Makes a API call to get the access token and sets it in the state
 * 
 * @returns {string} accessToken
 */
function useAccessToken() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        if (!accessToken) {  // Only fetch if accessToken is not set
            getAccessToken().then((access_token) => {
                setAccessToken(access_token);
            });
        }
    }, [accessToken]);
    return accessToken;
}

export default useAccessToken;
