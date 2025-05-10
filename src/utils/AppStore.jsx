import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice';
import MovieReducer from './movieSlice';

const AppStore = configureStore({
    reducer: {
        user : UserReducer,
        movies: MovieReducer
    }
})

export default AppStore;