import { useState, useEffect } from 'react';
import getAccessToken from '../Api/Auth';

function useAccessToken() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        if (!accessToken) {  // Only fetch if accessToken is not set
            getAccessToken().then((access_token) => {
                setAccessToken(access_token);
            });
        }
    }, [accessToken]);  // Add accessToken as a dependency

    return accessToken;
}

export default useAccessToken;
