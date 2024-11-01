import SkeletonCard from './SkeletonCard';
import Card from './Card';

const EventList = ({ events, status }) => {
  if (status === 'idle') {
    return Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />);
  }

  if (events.length === 0) {
    return <h1 className='font-montserrat text-4xl mb-2'>No Events</h1>;
  }

  return events.map((event, index) => <Card key={index} event={event} index={index} />);
};

export default EventList;
