import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { setNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(setNowPlayingMovies(json?.results));
    }
}
export default useNowPlayingMovies;
