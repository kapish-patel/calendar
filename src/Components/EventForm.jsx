import { useState, useEffect } from 'react';
import { formatISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { validateTitle, validateDescription, validateStartDate, validateEndDate } from '../services/ValidationService';

const EventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors({
      title: validateTitle(title),
      description: validateDescription(description),
      startDate: validateStartDate(startDate),
      endDate: validateEndDate(startDate, endDate),
    });
  }, [title, description, startDate, endDate]);


  const handleResetForm = () => {
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setTouched({});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;

    const formattedStartDate = formatISO(new Date(startDate));
    const formattedEndDate = formatISO(new Date(endDate));
    const event = {
        "id": uuidv4(),
        "title": title,
        "description": description,
        "startDate": formattedStartDate,
        "endDate": formattedEndDate,
    };
    onSubmit(event);

    handleResetForm();
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
      {/* Input fields with error display */}
      {/* Title */}
        <div className="col-span-2">
            <label htmlFor="title" className="text-gray-500 mb-1 block">Event Title</label>
            <input
            name="title"
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => handleBlur('title')}
            className="p-2 border rounded w-full"
            required
            />
            {touched.title && errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="col-span-2">
            <label htmlFor='description' className="text-gray-500 mb-1 block">Event Description</label>
            <input
            name="description"
            type="text"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => handleBlur('description')}
            className="p-2 border rounded w-full"
            required
            />
            {touched.description && errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="col-span-1">
            <label htmlFor='startDate' className="text-gray-500 mb-1 block">Start Date</label>
            <input
            name="startDate"
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            onBlur={() => handleBlur('startDate')}
            className="p-2 border rounded w-full"
            required
            />
            {touched.startDate && errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
        </div>

        <div className="col-span-1">
            <label htmlFor='endDate' className="text-gray-500 mb-1 block">End Date</label>
            <input name="endDate" type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} onBlur={() => handleBlur('endDate')} className="p-2 border rounded w-full" required />
            {touched.endDate && errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
        </div>

        <div className="col-span-2">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Add Event
            </button>
        </div>
    </form>
  );
};

export default EventForm;
