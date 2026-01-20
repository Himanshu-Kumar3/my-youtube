import { createSlice } from "@reduxjs/toolkit"
const searchVideoSlice = createSlice({
      name:"searchVideo",
      initialState:{
            results:[],
            query:""
      },
      reducers:{
            setSearchResults(state , action){
              state.results = action.payload.results;
              state.query = action.payload.query;
            },
             clearSearchResult(state){
                  state.results =[];
                  state.query = ""

            }
      
      }
});
export const {setSearchResults , clearSearchResult} = searchVideoSlice.actions;
export default searchVideoSlice.reducer;