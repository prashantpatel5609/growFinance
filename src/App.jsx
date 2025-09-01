import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from "./components/Home.jsx";
import Routing from './Utils/Routing.jsx'

import Loader from './components/Loader.jsx';
const App = () => {
  return (
    <Loader>
    <div>
      <Navbar/>
      <Routing/>
    
    </div>
    </Loader>
  )
}

export default App
