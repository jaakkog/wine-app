import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Divider } from 'antd';

const Wines = ( { pairing } ) => {


    const [wines, setWines] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [wineInfo, setWineInfo] = useState('')
    const [url, setUrl] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          if (pairing === '') {
            return null
          }
          const data = await axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"e527975635msh0f3e4ff006bebe9p1a5ca7jsnbd1a020fdbc3",
            "useQueryString":true
            },"params":{
            "food":`${pairing}`
            }
            });
            setWines(Array.from(data.data.pairedWines))
            setDescription(data.data.pairingText)
            setImage(data.data.productMatches[0].imageUrl)
            setWineInfo(data.data.productMatches[0].description)
            setUrl(data.data.productMatches[0].link)
            setPrice(data.data.productMatches[0].price)
            setTitle(data.data.productMatches[0].title)

    };
    fetchData();
}, [pairing]);

    if (pairing === '') {
        return (
            <div>
               No matches yet..
            </div>
        )
    } else {

    return (
    <div>
    <List
      size='small' 
      bordered
      header={<div style={{fontSize: '4vh'}}>
      Your wine matches:</div>}
      dataSource={wines}
      renderItem={item => (
        <List.Item style={{fontSize: '3vh', 'margin': '3vh'}}>
         {item}
        </List.Item>
      )}
    />
    <Divider orientation="left"></Divider>
      <p>{description}</p>
      <img src={image} alt=""></img>
      <p><a href={url}>{title}</a></p>
      <p>{wineInfo}</p>
      <p>Price: {price}</p>
      </div>
    );
}
}
export default Wines