import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {

    const [quote, setQuote] = useState({a: []});
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await axios({
          "method":"GET",
          "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":"e527975635msh0f3e4ff006bebe9p1a5ca7jsnbd1a020fdbc3",
          "useQueryString":true
          }
          });
          setQuote(data.data)
          console.log(data)
      };
      fetchData();
    }, []);
  
  
    return (
      <div>
        <h2>Food trivia</h2>
        <p>{quote.text}</p>
      </div>
    )
  }

  export default Quote;