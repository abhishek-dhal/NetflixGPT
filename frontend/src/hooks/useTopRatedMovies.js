import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {

    //Fetch Data from TMDB API and update store
const dispatch = useDispatch();

const getTopRatedMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
  const json = await data.json();
  console.log(json.results);
  dispatch(addTopRatedMovies(json.results));
};

useEffect(() => {
    getTopRatedMovies();  //why data is shown 2 times in console,This happens due to react strict mode

},[]);
};

export default useTopRatedMovies;