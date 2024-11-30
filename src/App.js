import React from "react";
import { useState } from "react";
import data from './data';
import Tours from './components/Tours';
import Fugora from './components/Fugora';
const App = () => {
  const [tours,setTours]=useState(data);
  function removeTour(id)
  {
    const newTours=tours.filter(tour=> tour.id!=id);
    setTours(newTours);
  }
  if(tours.length === 0)
  {
    return (
      <div className="refresh">
        <h2>No Tour left</h2>
        <button className="btn-white" onClick={()=> setTours(data)}>Refresh Content</button>
      </div>
    );
  }
  return (
    <div className="App">
      
      <Tours tours={tours} removeTour={removeTour}></Tours>
      <Fugora></Fugora>
    </div>
  );
};

export default App;
