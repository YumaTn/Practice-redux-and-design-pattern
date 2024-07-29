import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search'
import watcherSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import genresReducer from './genres'
import moviesReducer from './movies'
import movieReducer from './movie'
const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        search:searchReducer,
        genres:genresReducer,
        movies:moviesReducer,
        movie:movieReducer,
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware({think:false}).prepend(SagaMiddleware);
    }
});

SagaMiddleware.run(watcherSaga)

export default store;