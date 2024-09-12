import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Services from './Components/Services/Services'


const App = () => {
  return (
    <div>
      <Navbar/>  
      <Banner/>
      <Services/>
      <About/>
    </div>
  )
}

export default App