import { ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List/List";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  const title = 'Reactivities';
  return (
    <>
      <Typography variant="h3" className="app" style={{color: 'black' }}>{title}</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
