
import './App.css'
import Head  from './Components/Head'
import Body from './Components/Body'
import store from './utils/strore'
import {Provider} from "react-redux"
import {createBrowserRouter} from "react-router"
import MainContainer from './Components/MainContainer'
import WatchVideo from './Components/WatchVideo'
import { RouterProvider } from 'react-router-dom'



const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchVideo/>
  }
]
}])

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
    <div className='snap-none '>
        <Head/>
        <RouterProvider router={appRouter}/>     
    </div>
     </Provider>
   
  )
}

export default App
