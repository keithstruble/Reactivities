import { Group } from "@mui/icons-material";
import { Box, Button,  Link,  Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ color: 'white', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', alignContent: 'center', justifyContent: 'center', height: '100vh',
      backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
      <Typography variant="h3">
        Home page
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', color: 'white', gap: 3 }}>
        <Group sx={{height: 110, width: 110}} />
        <Typography variant="h1">
          Reactivites
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to reactivites
      </Typography>

      <Button 
          component={Link} 
          href="/activities"
          size="large" variant="contained" sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}>
        Take me to the activities!
      </Button>
    </Paper>
  )
} 