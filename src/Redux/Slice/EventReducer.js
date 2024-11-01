import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getEvents, addEvent} from '../..//Api/Events';

export const fetchEvents = createAsyncThunk('Events/fetchEvents', async (accessToken) => {
    try {
        const response = await getEvents(accessToken);
        return response;
    } catch (error) {
        return error;
    }
});

export const postEvent = createAsyncThunk('Events/postEvent', async (data) => {
    try {
        const {accessToken, event} = data;
        const response = await addEvent(accessToken, event);
        return response;
    }
    catch (error) {
        return error;
    }
});

const initState = {
    events: [],
    TotalEvents: 0,
    status: 'idle',
    error: null
}

export const Events = createSlice({
    name: 'Events',
    initialState: initState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload.items;
                state.TotalEvents = action.payload.total;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        builder
            .addCase(postEvent.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(postEvent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events.push(action.payload);
                state.TotalEvents++;
            })
            .addCase(postEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default Events.reducer;