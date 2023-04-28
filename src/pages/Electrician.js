import { useEffect, useState } from 'react';

export const Electrician = () => {
  const [electricians, setElectricians] = useState([])
  useEffect(() => {
    fetch('https://localhost:7009/api/Electrician')
      .then(response => response.json())
      .then(responseJson => {
      setElectricians(responseJson)
      })
  }, []);

  return <div className="shopping-list">
    <div>Electrician</div>
    {
      electricians.map((items) => (
        <div key={items.id}>
          <div>{items.name}</div>
          <div>{items.email}</div>
          <div>{items.feePerHour}</div>
          <div>{items.website}</div>
          <div>{items.specialterms}</div>
        </div>
          ))
     }
  </div >
}



