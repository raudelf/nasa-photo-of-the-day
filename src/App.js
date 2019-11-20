import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import InfoCard from './InfoCard';

function App() {
  const [data, setData] = useState([]);
  let nasaApi =
    "https://api.nasa.gov/planetary/apod?api_key=LvxZR5lZa6UJUh6xQ1w7ZdCafZqJgBMlx37vrKwr";

  useEffect(props => {
    axios
      .get(nasaApi)
      .then(res => {
        setData(res.data);
        console.log(res);
      })
      .catch(err => {
        return `Error: ${err}`;
      });
  }, []);
  return (
    
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <InfoCard title={data.title} image={data.hdurl} date={data.date}/>
    </div>
  );
}

export default App;
