import React from 'react'
import {Routes , Route} from "react-router"
import Home from './pages/Home'
import Navbar from './components/common/Navbar'


const App = () => {
  return (
    
    <div>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App