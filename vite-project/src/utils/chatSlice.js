import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./constants";
const chatSlice = createSlice({
      name:"chat",
      initialState:{
            messege:[]
      },
      reducers:{
            addChatMessege(state , action){
                  state.messege.splice(LIVE_CHAT_COUNT , 1);
                  state.messege.unshift(action.payload);

            }
      }

})

export const {addChatMessege} = chatSlice.actions;
export default chatSlice.reducer;