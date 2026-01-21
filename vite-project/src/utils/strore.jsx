import {configureStore} from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import searchReducer from "./searchSlice"
import SearchVideoReducer from "./searchVideoSlice";
import chatReducer from "./chatSlice";
const store = configureStore({
  reducer:{
    app:appReducer,
    search : searchReducer ,
    searchvideo: SearchVideoReducer,
     chat: chatReducer
  }
});

export default store;