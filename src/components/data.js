import React, { useState, useEffect } from 'react';
import Title from './title';
import axios from 'axios';
import Explanation from './explanation';
import Img from './url';
import Date from './date'


export default function Data (){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`)
          .then(object => {
            const item = object.data;
            console.log(object)
            setData(item);
          });

      }, []);

    return (
        <div className='container'>
            <Title title ={data.title}/>
            <Img img={data.img} />
            <Date date ={data.date}/>
            <Explanation explanation ={data.explanation}/>
        </div>
    );
}