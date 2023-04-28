
import { useEffect, useState } from 'react';


export const Electrician =()=>{
    const  [electricians, setElectricians]=useState([])
    useEffect(()=>{
        fetch('https://localhost:7009/api/Electrician')
        .then(response=> response.json())
        .then(responseJson=>{
    
            setElectricians(responseJson)
        })
      },[]);

   return <div className="shopping-list">
      <h5>electr</h5>
      {
          electricians.map((items)=>(
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.email}</td>
                <td>{items.fee}</td>
                <td>{items.website}</td>
                <td>{items.specialterms}</td>
            </tr>

          ))
        }
  </div>
}



