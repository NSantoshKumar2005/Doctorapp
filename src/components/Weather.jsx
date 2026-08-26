import { useEffect, useState } from 'react'

const weatherDescriptions = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Foggy',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Rain showers',
  82: 'Heavy rain showers',
  95: 'Thunderstorm',
}

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [place, setPlace] = useState('')
  const [message, setMessage] = useState('Getting your current weather...')

  async function getWeather(latitude, longitude, locationName) {
    setMessage('Loading current weather...')
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`,
      )
      if (!response.ok) throw new Error('Weather request failed')

      const data = await response.json()
      setWeather(data.current)
      setPlace(locationName)
      setMessage('')
    } catch {
      setWeather(null)
      setMessage('Unable to get the current weather. Please try again.')
    }
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setMessage('Location is unavailable. Search for a city below.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => getWeather(coords.latitude, coords.longitude, 'Your current location'),
      () => setMessage('Location permission was not granted. Search for a city below.'),
    )
  }, [])

  async function handleForm(event) {
    event.preventDefault()
    const searchCity = city.trim()
    if (!searchCity) return setMessage('Please enter a city name.')

    setWeather(null)
    setMessage('Finding city...')
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=1&language=en&format=json`,
      )
      const data = await response.json()
      const result = data.results?.[0]
      if (!result) throw new Error('City not found')

      const locationName = [result.name, result.admin1, result.country].filter(Boolean).join(', ')
      await getWeather(result.latitude, result.longitude, locationName)
    } catch {
      setMessage('City not found. Check the spelling and try again.')
    }
  }

  return (
    <main className="weather-page">
      <section className="weather-panel">
        <p className="weather-kicker">LIVE WEATHER</p>
        <h1>Weather right now</h1>
        <p className="weather-subtitle">Search any city or allow location access for local conditions.</p>
        <form className="weather-search" onSubmit={handleForm}>
        <input
          className="weather-input"
          type="text"
          placeholder="Enter a city, for example Hyderabad"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
          <button type="submit">Search</button>
        </form>

        {message && <p className="weather-message">{message}</p>}
      {weather && (
        <div className="weather-card">
          <div className="weather-main">
            <div>
              <p className="weather-location">{place}</p>
              <h2>{weatherDescriptions[weather.weather_code] ?? 'Current conditions'}</h2>
            </div>
            <p className="weather-temperature">{Math.round(weather.temperature_2m)}<span>°C</span></p>
          </div>
          <div className="weather-details">
            <p><span>Feels like</span>{Math.round(weather.apparent_temperature)}°C</p>
            <p><span>Humidity</span>{weather.relative_humidity_2m}%</p>
            <p><span>Wind</span>{weather.wind_speed_10m} km/h</p>
          </div>
        </div>
      )}
      </section>
    </main>
  )
}

export default Weather
