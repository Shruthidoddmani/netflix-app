import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/Constants";

const Browse = () => {

  useEffect(() => {
    getNowPlayingMovies();
  }, [])


  const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = data.json();
    console.log(json);
  }
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse