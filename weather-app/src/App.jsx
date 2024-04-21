import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('');
  const key = "6e24c0a50c84dafa8864b3faccf5f620";
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [search]);

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
      {city && <p>{city.main.temp}</p>}
        {city && <p>{city.name}</p>}
      </div>
      </div>

    </>
  );
}

export default App;