import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies.popularMovies);
  return (
    movies.nowPlayingMovies && (
      <div className="  bg-black">
        {/* 
        MovieList - Popular
           MovieCard * n
        MovieList - Trending
        MovieList - Now Playing
        MovieList - Horror
       */}

        <div className="-mt-52 relative pl-12 z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />

          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
