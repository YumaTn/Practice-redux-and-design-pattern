import { delay,all, call, put ,takeEvery, takeLatest } from "redux-saga/effects";
import { fetchedSearchMovie, searchMovies } from "../redux/search";
import { API_KEY } from "../config";
import { fetchedGenres,getGenres } from "../redux/genres";
import { fetchedPopularMovies,getPopularMovies } from "../redux/movies";
import { getMovie,fetchedMovie } from "../redux/movie";
import TheMovieDbApi from "../lib/api";

const api= new TheMovieDbApi(API_KEY);

function* fetchSearchMovie(action){
    yield delay(500)

    yield put(
        fetchedSearchMovie(yield call(api.searchMovie, action.payload))
    )
}

function* fetchGenres(action){
    yield put(
        fetchedGenres(yield call(api.getGenres,action.payload))
    )
}

function* fetchPopularMovies(action){
    yield put(
        fetchedPopularMovies(yield call(api.getPopularMovies,action.payload))
    )
}

function* fetchMovie(action){
    yield put(
        fetchedMovie(yield call(api.getMovie,action.payload))
    )
}

export default function* watcherSaga(){
    yield all([
        yield takeEvery(getMovie.type, fetchMovie),
        yield takeEvery(getGenres.type, fetchGenres),
        yield takeEvery(getPopularMovies.type, fetchPopularMovies),
        yield takeLatest(searchMovies.type, fetchSearchMovie),
        
    ])
}