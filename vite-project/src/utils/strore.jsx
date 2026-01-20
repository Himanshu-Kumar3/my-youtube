import {configureStore} from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import searchReducer from "./searchSlice"
import SearchVideoReducer from "./searchVideoSlice";
const store = configureStore({
  reducer:{
    "app":appReducer,
    "search" : searchReducer ,
    "searchvideo": SearchVideoReducer
  }
});

export default store;