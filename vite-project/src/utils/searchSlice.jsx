import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
      name:"search",
      initialState:{
            items:{}
            
      },
      reducers:{
            cacheResult(state , action){
                  state.items = {...state.items , ...action.payload}
            }


      }
})

export const {cacheResult} = searchSlice.actions;
export default searchSlice.reducer;