import React from 'react'
import CountryDetails from './Components/CountryDetails'
import CountryList from './Components/CountryList'
import { Route, Routes } from 'react-router-dom'
const App = () => {
 
 
  return (
    <div>
      <Routes>
       <Route path="/CountryList" element={<CountryList/>} />
       <Route path="/CountryList/CountryDetails" element={<CountryDetails/>} />
      </Routes>
    </div>
  )
}

export default App