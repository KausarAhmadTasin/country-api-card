/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import "./Cards.css"
import Card from "../single-card/Card";

const Cards = () => {
    const [country, setCountry] = useState([]);
    const url = "https://restcountries.com/v3.1/all" ;
    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(data =>  setCountry(data));
      }, []);
      
  return ( 
    <div className="card-container">
        {
            country.map((singleCountry)=> <Card  
            singleCountry = {singleCountry}
            name = {singleCountry.name.common}
            flags = {singleCountry.flags.png}
            flagAlt = {singleCountry.flags.alt}
            population = {singleCountry.population}
            language = {singleCountry.languages}
            currency = {singleCountry.currencies}
            nationalSymbol = {singleCountry.coatOfArms.png}
            />)
        
        }
        
    </div>
  )
}

export default Cards;