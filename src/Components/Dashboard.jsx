import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, postEvent } from '../Redux/Slice/EventReducer';
import UseAccessToken from '../Hooks/UseAccessToken';
import EventForm from './EventForm';
import EventList from './EventList';

function Dashboard() {
  const dispatch = useDispatch();
  const accessToken = UseAccessToken();
  const events = useSelector((state) => state.Event.events);
  const totalEvents = useSelector((state) => state.Event.TotalEvents);
  const status = useSelector((state) => state.Event.status);

  useEffect(() => {
    if (accessToken){
      dispatch(fetchEvents(accessToken));
    }
  }, [dispatch, accessToken]);

  const handleEventSubmit = (event) => {
    dispatch(postEvent({ accessToken, event }));
  };

  return (
    <div className="flex-col w-full p-4">
      <div className="flex justify-between items-start mb-8 gap-8 bg-gray-100 p-6 rounded-lg shadow">
        <div className="w-1/4">
          <h1 className="text-2xl font-bold mb-2">Your Events</h1>
          <p className="text-gray-500">Total Events: {totalEvents}</p>
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
          <EventForm onSubmit={handleEventSubmit} />
        </div>
      </div>

      <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh)' }}>
        <EventList events={events} status={status} />
      </div>
    </div>
  );
}

export default Dashboard;
