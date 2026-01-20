
import './App.css'
import Head  from './Components/Head'
import Body from './Components/Body'
import store from './utils/strore'
import {Provider} from "react-redux"
import {createBrowserRouter, Outlet , RouterProvider} from "react-router"
import MainContainer from './Components/MainContainer'
import WatchVideo from './Components/WatchVideo'

import SearchVideo from './Components/SearchVideo'



const appRouter = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[{
    path:"/",
    element:<Body/>
  },
  {
    path:"/watch",
    element:<WatchVideo/>
  },{
    path:"/searchVideo",
    element:<SearchVideo/>
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

function Layout() {

  
  return (
    <div className='snap-none '>
      
        <Head/>
        <Outlet/>
          
    </div>
   
   
  )
}

function App(){
  return(
    <Provider store={store}>
     < RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
