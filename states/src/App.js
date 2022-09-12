import React,{useEffect, useState } from 'react';
import './App.css';

function App() {
   
  const [data,setData] = useState([])

 useEffect (() => {
  fetch('https://data.covid19india.org/data.json').then(res => res.json()).then(
    jsondata => setData(jsondata.statewise)
  )
 },[])

  return (
    <div className="App">
      <center>
      <h2 className='bg-dark text-primary'>India Covid-19 dashBoard</h2>
      <table className='table table-dark table-striped-columns table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr>
                <td>{item.state}</td>
                <td>{item.confirmed}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
                <td>{item.active}</td>
                <td>{item.lastUpdatedtime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;
