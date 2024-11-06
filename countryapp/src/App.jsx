import React from 'react'
import CountryDetails from './Components/CountryDetails'
import CountryList from './Components/CountryList'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import CountryCard from './Components/CountryCard'
import CountryDetail from './Components/CountryDetails'
const App = () => {
 
 const navigate = useNavigate();
 const pageload = () =>{
  navigate("/CountryList")
 }
 const homeload = () =>{
  navigate("")
 }
  return (
    <div>
      <button onClick={pageload}>to go country page</button>
      <button  onClick={homeload}>go to home </button>
      <Routes>
       
      <Route path="/CountryList" element={<CountryList />} />
      <Route path="/CountryList/:countryCode" element={<CountryDetail />} />
      <Route path="/CountryCard" element={<CountryCard/>}/>
      </Routes>
    </div>
  )
}

export default App