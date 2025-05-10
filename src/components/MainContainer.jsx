import { useSelector } from 'react-redux'
import Videobackground from './Videobackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(state => state.movies.nowPlayingMovies);
  
  if (!movies) return;
  const backgroundMovieDisplay = movies[0]
  const { original_title, overview, id: movieId } = backgroundMovieDisplay;
  
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieId={movieId} />
    </div>
  )
}

export default MainContainer
