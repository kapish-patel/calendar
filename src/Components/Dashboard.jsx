import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {fetchEvents, postEvent} from '../Redux/Slice/EventReducer'
import UseAcceessToken from '../Hooks/UseAccessToken'
import { formatISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';


function Dashboard() {
    const dispatch = useDispatch();
    const accessToken = UseAcceessToken();
    const events = useSelector((state) => state.Event.events);
    const totalEvents = useSelector((state) => state.Event.TotalEvents);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    useEffect(() => {
        dispatch(fetchEvents(accessToken));
    }, [accessToken,dispatch]);


    const handleEventSubmit = (e) => {
        e.preventDefault();
        const formattedStartDate = formatISO(new Date(startDate));
        const formattedEndDate = formatISO(new Date(endDate));

        const event = {    
            "id": uuidv4(),
            "title": title,
            "description": description,
            "startDate": formattedStartDate,
            "endDate": formattedEndDate
        }
        // console.log(event);
        dispatch(postEvent({accessToken, event}));
    }
    
    return (
        <div>
        <h1>this is Dashboard</h1>
        <h2>Total Events: {totalEvents}</h2>
        <ul>
            {events.map((event) => (
                <li key={event.id}>{event.title}</li>
            ))}
        </ul>

        <div>
            <form action="POST">
                <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                
                <button type='submit' onClick={handleEventSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Dashboard
