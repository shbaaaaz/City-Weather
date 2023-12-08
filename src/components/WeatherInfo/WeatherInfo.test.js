import { render, screen } from '@testing-library/react'
import WeatherInfo from './WeatherInfo'

describe('WeatherInfo component', () => {
  const mockWeatherData = {
    main: {
      temp: 7,
      feels_like: 2,
      humidity: 83,
    },
    wind: {
      speed: 32,
    },
    visibility: 10000,
    clouds: {
      all: 20,
    },
    weather: [
      {
        icon: '01d',
        description: 'scattered clouds',
      },
    ],
  }

  test('renders the component with provided weather data', () => {
    render(<WeatherInfo weatherData={mockWeatherData} />)
    const weatherInfoMain = screen.getByText(
      `${mockWeatherData.main.temp} °C | ${mockWeatherData.weather[0].description}`,
      {
        exact: false,
      }
    )

    expect(weatherInfoMain).toBeInTheDocument()
    // const weatherIcon = screen.getByAltText(
    //   `${mockWeatherData.weather[0].description}`,
    //   { exact: false }
    // )

    // expect(weatherIcon.src).toContain(`${mockWeatherData.weather[0].icon}`)

    // expect(screen.getByText('Feels like')).toBeTruthy()
  })
})
