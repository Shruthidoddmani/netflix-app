import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', API_OPTIONS)
            const json = await data.json();
            const filteredData = json.results.filter(vedio => vedio?.type === 'Trailer');
            const trailer = filteredData.length ? filteredData[0] : json.results[0];
            dispatch(setTrailerVideo(trailer));
        })()
    }, [])
}

export default useMovieTrailer