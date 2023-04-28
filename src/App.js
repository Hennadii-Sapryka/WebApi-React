
import { useEffect, useState } from 'react';
import './App.css';

import { ApiConfig } from './api/serviceApi';
import  {Electrician} from './pages/Electrician';

function App() {

  const  [elec, setElec]=useState([])

  useEffect(()=>{
    fetch(ApiConfig.API_URL2)
    .then(response=> response.json())
    .then(responseJson=>{

      setElec(responseJson)
    })
  },[])

  return (
    <div className="App">
            
      <header className="App-header">
      <Electrician></Electrician>
        <h5>Hi
        {
          elec.map((items)=>(
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.email}</td>
                <td>{items.fee}</td>
                <td>{items.website}</td>
                <td>{items.specialterms}</td>
            </tr>

          ))
        }
        </h5>
      </header>

    </div>
  );
}

export default App;
