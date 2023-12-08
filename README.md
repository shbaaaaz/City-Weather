# City Weather App

Welcome to the City Weather App, a simple yet intuitive application that allows users to check the weather of their current location or any city around the world. This app provides weather information and stunning images based on the city searched by the user.

## Features

- Detects user's location and displays current weather information.
- Allows users to search for weather details of any city.
- Renders an image based on the searched city using Unsplash API.
- Bookmark up to 3 favorite cities for quick weather access.
- Saves favorite cities in localStorage for persistent storage.

## Technologies Used

- JSX
- CSS3
- JavaScript
- React.js
- Jest (for testing)
- react-testing-library (for testing)
- OpenWeather API (https://openweathermap.org)
- Unsplash API (https://unsplash.com)
- localStorage

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
    git clone https://github.com/shbaaaaz/City-Weather.git
```

### 2. Navigate to the project directory:

```bash
    cd City-Weather
```

### 3. Install dependencies:

```bash
    npm install
```

### 4. Get API Keys:

- Obtain API keys from OpenWeather and Unsplash.
- Create a .env file in the root directory.
- Add your API keys and the below details to the .env file.

```bash
    REACT_APP_WEATHER_API_TOKEN=your_openweather_api_key
    REACT_APP_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5/weather
    REACT_APP_WEATHER_IMAGE_BASE_URL=https://openweathermap.org/img/wn
    REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key
    REACT_APP_USPLASH_API_BASE_URL=https://api.unsplash.com/search/photos
```

5.  Start the development server:

```bash
    npm start
```

6.  Open your browser and navigate to http://localhost:3000 to view the Weather App.

## Folder Structure

```
📦src
 ┣ 📂components # Contains all the custom components
 ┃ ┣ 📂ErrorContainer
 ┃ ┃ ┣ 📜ErrorContainer.jsx
 ┃ ┃ ┗ 📜ErrorContainer.module.css
 ┃ ┣ 📂FavouriteCity
 ┃ ┃ ┣ 📜FavouriteCity.jsx
 ┃ ┃ ┗ 📜FavouriteCity.module.css
 ┃ ┣ 📂ImageContainer
 ┃ ┃ ┣ 📜ImageContainer.jsx
 ┃ ┃ ┗ 📜ImageContainer.module.css
 ┃ ┣ 📂Loader
 ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┗ 📜Loader.module.css
 ┃ ┣ 📂SearchForm
 ┃ ┃ ┣ 📜SearchForm.jsx
 ┃ ┃ ┣ 📜SearchForm.module.css
 ┃ ┃ ┗ 📜SearchForm.test.js
 ┃ ┗ 📂WeatherInfo
 ┃ ┃ ┣ 📜WeatherInfo.jsx
 ┃ ┃ ┣ 📜WeatherInfo.module.css
 ┃ ┃ ┗ 📜WeatherInfo.test.js
 ┣ 📂context # Contains context providers to be consumed by the different components
 ┃ ┗ 📜fav-cities-context.js
 ┣ 📂helper # Contains helper functions for different purpose
 ┃ ┣ 📜geoLocationAPI.js
 ┃ ┣ 📜imageAPI.js
 ┃ ┗ 📜weatherAPI.js
 ┣ 📂hooks # Contains custom hooks used in the project
 ┃ ┣ 📜useCityImage.js
 ┃ ┗ 📜useWeatherData.js
 ┣ 📜App.js # Entry point of the application
 ┣ 📜App.module.css
 ┣ 📜index.css
 ┗ 📜index.js
```

## Usage

- Allow location permission to get weather details of your current location.
- Search for a city to get its weather information and an associated image.
- Click on the bookmark icon to save favorite cities for quick access.

## Testing

The project includes test cases written using Jest and react-testing-library.
To run the tests, use the below command.

```bash
    npm test
```

## Feedback / Suggestions

Please feel free to reach out to me in case you have any feedback / suggestion or any query regarding this project.

Contact: https://www.shahbazkhan.in/contact

## Screenshots

<img width="941" alt="image" src="https://github.com/shbaaaaz/City-Weather/assets/52371453/a2fc9d42-61d6-4feb-8331-82936495cb93">

<img width="941" alt="image" src="https://github.com/shbaaaaz/City-Weather/assets/52371453/d59c20cf-0edf-4316-aebf-161b0f1a24ff">

<img width="941" alt="image" src="https://github.com/shbaaaaz/City-Weather/assets/52371453/33cfa836-346f-4506-bfc6-e5897182f969">



