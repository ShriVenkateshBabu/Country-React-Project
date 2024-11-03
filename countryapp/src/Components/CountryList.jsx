import React, { useEffect, useState } from 'react'

const CountryList = () => {
  let [countries,setcountries] = useState([])
  let[error,seterror] =useState(null)
  let [loading,setLoading] = useState(true)
 

  useEffect(()=>{    
        const fetchcountries = async () =>{
            try{    
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json()
            setcountries(data)
            console.log(data);
            }
            catch{
              seterror(" Error : Error check fetch and api call statement ")
              console.log(error + "check fetch and api call statement");
            }
            finally{
                setLoading(false)
            }
         }
         fetchcountries(); 
 },[]) 
 if(loading){
    <div>loading</div>
 }
 if(error){
 <div>Error</div>
 }
 
    return (
    <div>
     <h1>Countries</h1> 
     <p>{error}</p>
     <p>{loading}</p>
     <ul>
        {countries.map((country) =>(
          <li key={country.cca3}>
            {country.name.common}
          </li>
        ))} 
        
     </ul>  
    </div>
  )
}

export default CountryList