import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
    // will use APIs to fill up this information
};
 // Actions
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload 
        },
        setTravelTimeInfo: (state, action) => {
            state.TravelTimeInfo = action.payload
        },
    },
});

// we need to export the actions so it can be used else  
export const {setOrigin, setDestination, setTravelTimeInfo} = navSlice.actions;
/* Destructing: exporting navigation actions so that the rest of the app can use it 
when we push info into the data layer, we need a way to pull it back from the data layer
for this we need Selectors: one selector for each action respectively */

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;