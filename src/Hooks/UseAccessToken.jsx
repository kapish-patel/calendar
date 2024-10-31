import {useState, useEffect} from 'react'
import getAccessToken from '../Api/Auth';

function UseAccessToken() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        getAccessToken().then((access_token) => {
            setAccessToken(access_token);
        });
    }, []);
    return (accessToken);
}

export default UseAccessToken
