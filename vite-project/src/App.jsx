
import './App.css'
import Head  from './Components/Head'
import Body from './Components/Body'
import store from './utils/strore'
import {Provider} from "react-redux"


/*
  Head
  Body
   Sidebar
   Main
     FilterButton
     Video container
       VideoCard
 */

function App() {
  return (
    <Provider store={store}>
    <div>
        <Head/>
        <Body/>       
    </div>
     </Provider>
   
  )
}

export default App
