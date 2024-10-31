import {configureStore} from '@reduxjs/toolkit';
import EventReducer from './Slice/EventReducer';

const store = configureStore({
    reducer: {
        // Reducers go here
        Event: EventReducer,
    }
});

export default store;