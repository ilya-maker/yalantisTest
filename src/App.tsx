import React, { useEffect, useState } from 'react';
import './App.scss';
import {HomePage} from "./components/HomePage";
import {getUsersFromApi} from "./helpers/api/api";


const App =() => {
  const [users, setUsers] = useState([]);
  const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const sortUsersByMonth = (users:User[]) => {
    const sortedUsersByMonths:User[][] = [[],[],[],[],[],[],[],[],[],[],[],[]];
    const monthPosition = 1;
    let monthCurrentUser = 0;
      for (let i = 0; i < users.length; i++) {
        monthCurrentUser = +users[i].dob.split('-')[monthPosition] - 1;
        sortedUsersByMonths[monthCurrentUser].push(users[i]);
      }
      return sortedUsersByMonths;
  };

  useEffect(() => {
      getUsersFromApi()
          .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="months">
          <HomePage users={sortUsersByMonth(users)} months={months} />
        </div>
      </div>
    </div>
  );
};

export default App;
