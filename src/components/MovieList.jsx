import { } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movieList }) => {

    return (
        <div className='px-5 text-white'>
            <h1 className='text-2xl font-bold py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movieList?.map(movie => <MovieCard key={movie.id} movieData={movie} />)}
                </div>
            </div>
        </div>

    )
}

export default MovieList
