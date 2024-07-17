
import React, { useEffect, useState } from 'react';


const Ipltable = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => response.json())
      .then(data => {
        
        const sortedData = data.sort((a, b) => {
          if (a.points !== b.points) {
            return b.points - a.points; 
          } else {
            return b.NRR - a.NRR; 
          }
        });
        setData(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1" style={{ border: "1p solid red" }}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">NO</th>
                <th scope="col">Team</th>
                <th scope="col">Matches</th>
                <th scope="col">Won</th>
                <th scope="col">Lost</th>
                <th scope="col">Tied</th>
                <th scope="col">NNR</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {
                Data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.No}</td>
                    <td>{item.Team}</td>
                    <td>{item.Matches}</td>
                    <td>{item.Won}</td>
                    <td>{item.Lost}</td>
                    <td>{item.Tied}</td>
                    <td>{item.NRR}</td>
                    <td>{item.Points}</td>
                  </tr>
                ))

              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}


export default Ipltable;