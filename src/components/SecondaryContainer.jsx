import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  return (
    (popularMovies?.length > 0 && nowPlayingMovies) && <div className="bg-black">
      <div className="-mt-40 relative z-1">
        <MovieList title={'Now Playing'} movieList={nowPlayingMovies} />
        <MovieList title={'Popular Movies'} movieList={popularMovies} />
        <MovieList title={'Horror Movies'} movieList={nowPlayingMovies} />
        <MovieList title={'Romantic Movies'} movieList={nowPlayingMovies} />
        <MovieList title={'US Series'} movieList={nowPlayingMovies} />
        <MovieList title={'Liked Movies'} movieList={nowPlayingMovies} />
        <MovieList title={'Anime Movies'} movieList={nowPlayingMovies} />
        <MovieList title={'Top #10 Movies'} movieList={nowPlayingMovies} />
      </div>
    </div>)
}

export default SecondaryContainer
