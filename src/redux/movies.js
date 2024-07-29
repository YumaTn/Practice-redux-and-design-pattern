import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    results:[],
    hasMore:false,
    page:0,
    totalPages:0,
    totalResults:0,
    isFetching:false,
}

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{
        getPopularMovies:(state) => {
            return{
                ...state,   
                isFetching:true,
            };
        },
        fetchedPopularMovies:(state,action) => {
            return{
                ...state,
                results:[...state.results,...action.payload.results],
                page:action.payload.page,
                hasMore:action.payload.page<action.payload.total_pages,
                totalPages:action.payload.totalPages, 
                totalResults:action.payload.total_results,
                isFetching:false
            };
        },
        resetPopularMovies:(state) => {
            return initialState;
        }
    }
});

export const {getPopularMovies,fetchedPopularMovies,resetPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;