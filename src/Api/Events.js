/**
 * Fetch all events from the server using the access token
 * 
 * @param {String} accessToken 
 * @returns payload which is an array of events
 */
const getEvents = async (accessToken) => {
    const response = await fetch(`https://interview.civicplus.com/${process.env.REQUEST_PREFIX}/api/Events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
};


/**
 * Make a POST request to add an event.
 * 
 * @param {String} accessToken 
 * @param {Object} event 
 * @returns newly created event
 */
const addEvent = async (accessToken, event) => {
    const response = await fetch(`https://interview.civicplus.com/${process.env.REQUEST_PREFIX}/api/Events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(event),
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
};

export { getEvents, addEvent };