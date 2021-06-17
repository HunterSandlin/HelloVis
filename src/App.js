import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BarChart from './BarChart';

function App() {

  const [data, setData] = useState([12, 5, 6, 6, 9, 10]);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(500);


  return (
    <>
      <div className="App">
        <BarChart data={data} width={width} height={height} />
      </div>
    </>
  );
}

export default App;
