// allows us to setup a data layer
// navSliceprimary layer where the user is going to store the navigation data where is their destination, starting point etc.
import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});