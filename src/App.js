import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import InfoCard from './InfoCard';

// &date=2012-03-14 <----- Input for Users to change picture!

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
  }, [nasaApi]);
  return (
    
    <div className="App">
      <InfoCard title={data.title} image={data.url} hdimage={data.hdurl} date={data.date} explanation={data.explanation}/>
    </div>
  );
}

export default App;
