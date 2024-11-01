import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, postEvent } from '../Redux/Slice/EventReducer';
import UseAcceessToken from '../Hooks/UseAccessToken';
import { formatISO } from 'date-fns';
import Card from './Card';
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
  }, [accessToken, dispatch]);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const formattedStartDate = formatISO(new Date(startDate));
    const formattedEndDate = formatISO(new Date(endDate));

    const event = {    
      id: uuidv4(),
      title,
      description,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };

    dispatch(postEvent({ accessToken, event }));

    // Clear form after submission
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="flex-col w-full p-4">
      {/* Container with flex layout to hold Total Events and Form side-by-side */}
      <div className="flex justify-between items-start mb-8 gap-8 bg-gray-100 p-6 rounded-lg shadow">
        {/* Total Events Info */}
        <div className="w-1/4">
          <h1 className="text-2xl font-bold mb-2">Your Events</h1>
          <p className="text-gray-500">Total Events: {totalEvents}</p>
        </div>

        {/* Add New Event Form */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
          <form onSubmit={handleEventSubmit} className="grid grid-cols-6 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border rounded col-span-2"
              required
            />
            <input
              type="text"
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border rounded col-span-2"
              required
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded col-span-1"
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded col-span-1"
              required
            />
            <div className="col-span-2">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Events List with Scrollable Area */}
      <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh)'}}>
        {totalEvents > 0 
          ? events.map((event, index) => <Card key={event.id} event={event} index={index} />)
          : <h1>No Events</h1>
        }
      </div>
    </div>
  );
}

export default Dashboard;
