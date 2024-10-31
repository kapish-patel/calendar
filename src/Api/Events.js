
const getEvents = async (accessToken) => {
    const response = await fetch('/api/Events', {
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


// function to post a new event
const addEvent = async (accessToken, event) => {
    const response = await fetch('/api/Events', {
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