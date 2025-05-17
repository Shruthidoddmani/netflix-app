import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }
    }
})

export const {
    setNowPlayingMovies,
    setTrailerVideo,
    setPopularMovies
} = movieSlice.actions;

export default movieSlice.reducer;