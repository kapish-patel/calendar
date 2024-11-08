/**
 * Make a POST request to the Auth endpoint to get an access token with the client ID and client secret
 * 
 * @returns {Promise<string>} - Access token
 */
const getAccessToken = async () => {
    const response = await fetch(`https://interview.civicplus.com/${process.env.REQUEST_PREFIX}/api/Auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "clientId": process.env.CLIENT_ID,
            "clientSecret": process.env.CLIENT_SECRET
        }),
    });
    const data = await response.json();
    return data.access_token;
};

export default getAccessToken;