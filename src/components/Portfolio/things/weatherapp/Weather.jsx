import React, { useEffect, useState, useRef } from "react";
import "./Weather.css";
import { FaSearchLocation } from "react-icons/fa";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);

  const inputRef = useRef();

  const icons = {
    "01d": <TiWeatherSunny size={120} color="#f39c12" />,
    "01n": <TiWeatherSunny size={120} color="#f39c12" />,
    "02d": <TiWeatherPartlySunny size={120} color="#f39c12" />,
    "02n": <TiWeatherPartlySunny size={120} color="#f39c12" />,
    "03d": <TiWeatherCloudy size={120} color="#7f8c8d" />,
    "03n": <TiWeatherCloudy size={120} color="#7f8c8d" />,
    "04d": <TiWeatherCloudy size={120} color="#7f8c8d" />,
    "04n": <TiWeatherCloudy size={120} color="#7f8c8d" />,
    "09d": <TiWeatherShower size={120} color="#3498db" />,
    "09n": <TiWeatherShower size={120} color="#3498db" />,
    "10d": <TiWeatherDownpour size={120} color="#2980b9" />,
    "10n": <TiWeatherDownpour size={120} color="#2980b9" />,
    "11d": <TiWeatherStormy size={120} color="#8e44ad" />,
    "11n": <TiWeatherStormy size={120} color="#8e44ad" />,
    "13d": <TiWeatherSnow size={120} color="#bdc3c7" />,
    "13n": <TiWeatherSnow size={120} color="#bdc3c7" />,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Lütfen bir şehir adı girin.");
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = icons[data.weather[0].icon] || <TiWeatherSunny size={120} />;
      setWeatherData({
        temp: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: `${data.name}, ${data.sys.country}`,
        icon: icon,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("Ankara");
  }, []);

  return (
    <div className="weather-app">
      <h2>Hava Durumu Uygulaması</h2>
      <p className="deneme">
        API kullanarak aldığım verilerle istediğiniz lokasyonda hava durumuna
        bakabilirsiniz.
      </p>
      <div className="search-row">
        <input ref={inputRef} type="text" placeholder="Şehir adı girin" />
        <button
          className="search-button"
          onClick={() => search(inputRef.current.value)}
        >
          <FaSearchLocation size={35} />
        </button>
      </div>
      {weatherData.icon}
      <div className="weather-info">
        <p className="temperature">{weatherData.temp}°C</p>
        <h3 className="location">{weatherData.location}</h3>
      </div>
      <div className="weather-data">
        <div className="col">
          <WiHumidity size={100} />
          <div>
            <p>{weatherData.humidity}%</p>
            <h4>Nem</h4>
          </div>
        </div>
        <div className="col">
          <TiWeatherWindy size={100} />
          <div>
            <p>{weatherData.windSpeed} Km/s </p>
            <h4>Rüzgar Hızı</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
