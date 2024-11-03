/**
 * A functional component that displays an event card
 * 
 * @param {Object} event - The event object to display
 * @param {Number} index - The index of the event in the list
 * @returns A UI component displaying the event details
 */
function Card({ event, index }) {
  // Format the dates for display (assuming start and end dates are ISO strings)
  const startDate = new Date(event.startDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const endDate = new Date(event.endDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className='flex border border-gray-300 rounded-lg p-6 justify-between m-4 shadow-lg bg-white'>
      <div className='flex flex-col'>
        <h1 className='font-montserrat text-4xl mb-2'>{event.title} #{++index}</h1>
        <p className='font-poppins text-gray-700'>{event.description}</p>
      </div>

      <div className='flex items-center justify-center bg-gray-100 rounded-lg p-4'>
        <p className='font-montserrat text-center text-gray-800'>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  )
}

export default Card
