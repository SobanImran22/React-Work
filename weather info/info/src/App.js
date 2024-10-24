import React from 'react';
import Weather from './comp/weathercard';
import './../src/App.css';

function App() {
    return (
        <div className="App">
            <h1>Weather App</h1>
            <Weather />
        </div>
    );
}

export default App;
