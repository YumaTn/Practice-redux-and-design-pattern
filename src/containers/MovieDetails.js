import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, resetMovie } from '../redux/movie';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Movie from '../components/Movie';

const MovieDetails = () => {
  const { movie } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      dispatch(getMovie(movieId));
    }
    return () => {
      dispatch(resetMovie());
    };
  }, [dispatch, id]); 

  return (
    movie.isFetching ? <Loader /> : <Movie movie={movie} genres={genres} />
  );
};

export default MovieDetails;
