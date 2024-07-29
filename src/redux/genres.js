import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres:[],
    isFetching:false,
}

const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
        getGenres: (state) => {
            return{
                ...state,
                isFetching:true,
        };
        },
        fetchedGenres:(state,action) =>{
            return{
                ...state,
                genres:action.payload.genres,
                isFetching:false,
            };
        },
        resetGenres:(state) =>{
            return initialState
        }
    },
});

export const {getGenres,fetchedGenres,resetGenres} = genresSlice.actions;
export default genresSlice.reducer;