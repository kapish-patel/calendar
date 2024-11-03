/**
 * A function that validates the title of a task.
 * 
 * @param {String} title 
 * @returns {String}return 'Title must not be empty' if title is empty.
 */
export const validateTitle = (title) => {
    return title.length > 0 ? '' : 'Title must not be empty';
  };
  

/**
 * A function that validates the description of a task.
 * 
 * @param {String} description
 * @returns {String} return 'Description must not be empty' if description is empty.
 */
export const validateDescription = (description) => {
    return description.length > 0 ? '' : 'Description must not be empty';
  };
  
/**
 * A function that validates the start date of a task.
 * 
 * @param {String} startDate 
 * @returns {String} return 'Start date is required' if startDate is empty.
 */
export const validateStartDate = (startDate) => {
    return startDate ? '' : 'Start date is required';
  };

/**
 * A function that validates the end date of a task.
 * 
 * @param {String} startDate
 * @param {String} endDate
 * @returns {String} return 'End date is required' if endDate is empty.
 */
export const validateEndDate = (startDate, endDate) => {
    if (!endDate) return 'End date is required';
    if (new Date(endDate) < new Date(startDate)) return 'End date must be after start date';
    return '';
  };
  