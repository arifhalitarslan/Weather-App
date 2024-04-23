import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import Footer from '../src/components/Footer.jsx'


function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('');
  const [desc, setdesc] = useState([]);

  const key = "6e24c0a50c84dafa8864b3faccf5f620";
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response.data);
        setCity(response.data);
        setdesc(response.data.weather);
        console.log(desc[0].main);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();

    

  }, [search]);

  function WeatherIcon(desc){
    
    if(desc[0]?.main === 'Clouds'){
    return <CloudQueueIcon/>
   }
   else if(desc[0]?.main === 'Rain'){
   return <WaterDropIcon/>
   }
   else if(desc[0]?.main === 'Clear'){
     return <Brightness5OutlinedIcon/>
     }
   else
   {return "";}

   }

  return (
    <>
    <div className='ContainerWeather'>
      <div className='HeaderWeather'>
        <p>Weather App</p>
        </div>
      <div className='SearchSection'>
        <img src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/industry/weather-forecast-background.jpg" alt="" />
        <div className='SearchInput'>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search city' /> 
        </div>
      </div>
      <div className='Results'>
      {search!= ""  ? <p>Temperature: {city?.main.temp}°C</p> : ""}
      {search!= "" ? <p>{desc[0]?.main} {WeatherIcon(desc)}</p> : ""}        
      {search!= "" ? <p>Min: {city?.main.temp_min} </p> : ""}    
      {search!= "" ? <p>Max: {city?.main.temp_max} </p> : ""}  
      {search!= "" ? <p>Feels Like: {city?.main.feels_like} </p> : ""}    
      </div>
      </div>
      <Footer/>
    </>

);
}

export default App;