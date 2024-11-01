
export const validateTitle = (title) => {
    return title.length > 0 ? '' : 'Title must not be empty';
  };
  
export const validateDescription = (description) => {
    return description.length > 0 ? '' : 'Description must not be empty';
  };
  
export const validateStartDate = (startDate) => {
    return startDate ? '' : 'Start date is required';
  };
  
export const validateEndDate = (startDate, endDate) => {
    if (!endDate) return 'End date is required';
    if (new Date(endDate) < new Date(startDate)) return 'End date must be after start date';
    return '';
  };
  