import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movieData}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt={movieData?.original_title} src={IMG_CDN_URL+'/'+ movieData?.poster_path}></img>
    </div>
  )
}

export default MovieCard
