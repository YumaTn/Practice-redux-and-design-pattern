
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies,resetPopularMovies } from "../redux/movies";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import { Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const PopularMovies = () => {

  const dispatch = useDispatch();

  const {movies} = useSelector((store) => store)
  const {genres} = useSelector((store) => store.genres)
  useEffect(()=>{
    dispatch(getPopularMovies());
    return() =>{
      dispatch(resetPopularMovies()); 
    }
  },[dispatch]);

  const loadMore = () =>{
    if(movies.hasMore){
      dispatch(getPopularMovies(movies.page + 1));
    }
  }

  return movies.page === 0 && movies.isFetching ? <Loader/> : 
  <><Typography>
    Popular Movies
  </Typography>
  <InfiniteScroll
  dataLength={movies.totalResults}
  next={loadMore}
  hasMore={movies.hasMore}
  loader={<Loader/>}
  style={{overflow:'hidden'}}
  >
  <Movies movies={movies} genres={genres}/>
  </InfiniteScroll>
  </>;
}

export default PopularMovies