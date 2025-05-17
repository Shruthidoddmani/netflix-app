import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { setPopularMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(setPopularMovies(json?.results));
    }
}
export default usePopularMovies;
