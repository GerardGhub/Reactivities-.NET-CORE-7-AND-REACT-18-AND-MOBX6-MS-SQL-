import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Actitvity } from '../models/activity';

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
      <Header as='h2' icon='users' content='Reactivities'/>

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
