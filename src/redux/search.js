import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    results: [],
    totalResult: 0,
    page:0,
    totalPages: 0,
    isFetching: false,
};

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        searchMovies: (state) => {
            return {
                ...state,
                isFetching: true,
            };
        },
        fetchedSearchMovie: (state, action) => {
            return {
                ...state,
                isFetching: false,
                results:action.payload.results,
                totalResult:action.payload.totalResult,
                page:action.payload.page,
                totalPages:action.payload.totalPages,
            };
        },
        resetState:(state)=>{
            return(
                initialState
            )
        }
    }
});

export const {searchMovies,fetchedSearchMovie,resetState} =searchSlice.actions;
export default searchSlice.reducer;