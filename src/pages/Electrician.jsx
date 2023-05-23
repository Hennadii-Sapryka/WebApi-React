import { useEffect, useState } from 'react';

export const Electrician = () => {

  const [users, setUsers] = useState([]);
  const arr = ['bobby', 'hadz', 'com'];

  useEffect(() => {
    fetch('https://localhost:7009/All')
      .then(response => response.json())
      .then(responseJson => {
      setUsers(responseJson)
      console.log(users)
      })
  }, []);

  return (
  <div className="shopping-list">

    {users.map((item)=>
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      )
    }

    </div>);
}



