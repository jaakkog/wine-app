import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Statistic, Row, Col, Button } from 'antd';

const Wines = ( { pairing, setPairing } ) => {


    const [wines, setWines] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [wineInfo, setWineInfo] = useState('')

    console.log('propsit', pairing)

    const api_key = process.env.API_KEY

    console.log('key' ,api_key)

    useEffect(() => {
        const fetchData = async () => {
        const data = await axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"e527975635msh0f3e4ff006bebe9p1a5ca7jsnbd1a020fdbc3",
            "useQueryString":true
            },"params":{
            "maxPrice":"50",
            "food":`${pairing}`
            }
            });
            console.log('wine data', data.data.productMatches[0])
            setWines(Array.from(data.data.pairedWines))
            setDescription(data.data.pairingText)
            setImage(data.data.productMatches[0].imageUrl)
            setWineInfo(data.data.productMatches[0].description)
    };
    fetchData();
}, [pairing]);

    return (
    <div>
    <Row gutter={16}>
    <Col span={12}>
    <h3>
    {wines[0]}
    </h3>
    </Col>
    <Col span={12}>
    <h3>
    {wines[1]}
    </h3>
    </Col>
    <Col span={12}>
    <h3>
    {wines[2]}
    </h3>
    </Col>
    </Row>
      <h4>{description}</h4>
      <img src={image} alt=""></img>
      <h4>{wineInfo}</h4>
      </div>
    );
}

export default Wines