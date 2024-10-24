import React from 'react'
import axios from 'axios'
import { Button,Form } from 'react-bootstrap'
import { useState } from 'react'
import Weathercard from '../weathercard';
function Home() {
 const [cityName, setCityName] = useState("");
 const [data,setData] = useState([])
 
   let submitHandel = async(e) => {
    e.preventDefault();
    console.log("im submit handeler")
try{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&appid=362e3925beef0fdf5789f2aa032834d9&units=matric`)
    console.log("response",response )
    setData(response.data.list)
}
catch (error) {
    console.log("error in api side" , error)
}





   }


    return (
    <div>
     <h1>Weather App</h1> 
     <form onSubmit={submitHandel}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
               <Form.Label>City Name</Form.Label>
            <Form.Control type='text' value={cityName} placeholder='Enter your city name' onChange={(e)=>setCityName(e.target.value)} required></Form.Control>

        </Form.Group>
        <Weathercard/>
    
    <Button type='submit'>Get Weather</Button>
     </form>
     {data.map((eachForcast, index) => (

     <weatherCard
      key={index}
    date={eachForcast.dt_txt}
    temp={eachForcast.main.temp}
    min={eachForcast.main.temp_min}
    max={eachForcast.main.temp_max}
          />
        ))}
    </div>
  );
};

export default Home
