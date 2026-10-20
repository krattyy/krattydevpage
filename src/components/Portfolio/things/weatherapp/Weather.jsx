import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
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

const iconMap = {
  "01d": <TiWeatherSunny size={96} color="#d4894a" />,
  "01n": <TiWeatherSunny size={96} color="#d4894a" />,
  "02d": <TiWeatherPartlySunny size={96} color="#d4894a" />,
  "02n": <TiWeatherPartlySunny size={96} color="#d4894a" />,
  "03d": <TiWeatherCloudy size={96} color="#a89a8a" />,
  "03n": <TiWeatherCloudy size={96} color="#a89a8a" />,
  "04d": <TiWeatherCloudy size={96} color="#a89a8a" />,
  "04n": <TiWeatherCloudy size={96} color="#a89a8a" />,
  "09d": <TiWeatherShower size={96} color="#7eb6d4" />,
  "09n": <TiWeatherShower size={96} color="#7eb6d4" />,
  "10d": <TiWeatherDownpour size={96} color="#5a9ec0" />,
  "10n": <TiWeatherDownpour size={96} color="#5a9ec0" />,
  "11d": <TiWeatherStormy size={96} color="#b08d6a" />,
  "11n": <TiWeatherStormy size={96} color="#b08d6a" />,
  "13d": <TiWeatherSnow size={96} color="#d8d0c4" />,
  "13n": <TiWeatherSnow size={96} color="#d8d0c4" />,
};

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [pulse, setPulse] = useState(false);
  const inputRef = useRef();

  const search = async (city) => {
    if (!city?.trim()) {
      setError("Lütfen bir şehir adı girin.");
      return;
    }

    try {
      setError("");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&lang=tr&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Şehir bulunamadı.");
        setWeatherData(null);
        return;
      }

      const icon =
        iconMap[data.weather[0].icon] || (
          <TiWeatherSunny size={96} color="#d4894a" />
        );

      setWeatherData({
        temp: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: `${data.name}, ${data.sys.country}`,
        icon,
      });
      setPulse(true);
      window.setTimeout(() => setPulse(false), 500);
    } catch {
      setError("Veri alınamadı. Daha sonra tekrar deneyin.");
    }
  };

  useEffect(() => {
    search("Ankara");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="demo-page weather-page fade-up">
      <Link to="/portfolyo" className="demo-back">
        ← Portfolyoya dön
      </Link>
      <h1 className="demo-title">Hava Durumu</h1>
      <p className="demo-lead">
        Neden: Harici bir REST API&apos;yi React state ile bağlayıp temiz bir UI
        sunmayı öğrenmek için yaptım. OpenWeatherMap ile anlık şehir verisi
        çekiyor.
      </p>

      <div className={pulse ? "weather-panel pulse" : "weather-panel"}>
        <div className="search-row">
          <input
            ref={inputRef}
            type="text"
            placeholder="Şehir adı girin"
            onKeyDown={(e) => {
              if (e.key === "Enter") search(inputRef.current.value);
            }}
          />
          <button
            type="button"
            className="search-button"
            aria-label="Ara"
            onClick={() => search(inputRef.current.value)}
          >
            <FaSearchLocation size={20} />
          </button>
        </div>

        {error && <p className="weather-error">{error}</p>}

        {weatherData && (
          <>
            <div className="weather-hero">
              {weatherData.icon}
              <div>
                <p className="temperature">{weatherData.temp}°C</p>
                <h2 className="location">{weatherData.location}</h2>
              </div>
            </div>

            <div className="weather-data">
              <div className="col">
                <WiHumidity size={42} />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Nem</span>
                </div>
              </div>
              <div className="col">
                <TiWeatherWindy size={42} />
                <div>
                  <p>{weatherData.windSpeed} km/s</p>
                  <span>Rüzgar</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
