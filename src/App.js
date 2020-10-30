import React from 'react';
const api={
  key:"127e678da8d8141fdf2c680e07cb99dd",
  base:"https://api.openweathermap.org/data/2.5/"
}


function App() {
const dateBuilder=(d)=>{
  let months=["january","February","March","April","May","June","July","August","September","October","November","December"];
  let days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let day=days[d.getDay()];
  let date=d.getDate();
  let month=months.[d.getMonth()];
  let year=d.getFullYear();


  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className="app ">

      <main>
        <div className="search-box">
        <input type="text"
        className="search-bar"
        placeholder="search..."/>
      
    </div>
    <div className="location-box">
      <div className="location">New York City,US</div>
  <div className="date">{dateBuilder(new Date())}</div>
      </div>
    <div className="weather-box">
      <div className="temp">
        15°c
      </div>
      <div className="weather">Sunny</div>
    </div>
    </main>
    </div>
  );
}

export default App;
