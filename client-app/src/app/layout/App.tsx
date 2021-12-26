import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Actitvity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Actitvity[]>([]);

  useEffect(() => {
    axios.get<Actitvity[]>('http://localhost:5000/api/activities').then(response => {
      // console.log(response);
      setActivities(response.data);
    })
  },[])

  return (
    <div>
      <NavBar />

      <List>
      {activities.map(activity => (
      <List.Item key={activity.id}>
      {activity.title}
      </List.Item>
      ))}
      </List>

   
    </div>
  );
}

export default App;
