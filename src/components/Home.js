import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link for navigation

// Example icons data (You can replace this with data from your backend)
const icons = [
  { id: 1, name: 'American Football', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.orA3-PW6y77YODk9nEPQsgHaE8?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'BASE BALL', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.UEb6QEMtE1RCJ-tMxGPAPgHaE8?rs=1&pid=ImgDetMain' },
  { id: 3, name: 'Badminton', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.9lN0a0RRn87qIXWWjLcATQHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 4, name: 'Cricket', description: 'Click for the moves', imageUrl: 'https://assets.khelnow.com/news/uploads/2024/09/Rohit-Sharma-1280x812.jpg' },
  { id: 5, name: 'Basketball', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.Glj9862pH_5yUNsMuxmPwAHaEK?rs=1&pid=ImgDetMain' },
  { id: 6, name: 'Lacrosse', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.kTaLY6kUsTs03aIvwYzrywHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 7, name: 'Table Tennis', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.BHErRHirrXt6BNUosLL88gAAAA?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 8, name: 'Golf', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/OIP.MvEEOUjjrbJkycGz9gg2sgHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 9, name: 'Figure Skating', description: 'Click for the moves', imageUrl: 'https://static01.nyt.com/images/2018/02/12/sports/12figureskatelive-russia1/merlin_133673952_6422ecb8-afaa-4430-806b-1b007faf49ba-superJumbo.jpg' },
  { id: 10, name: 'Volleyball', description: 'Click for the moves', imageUrl: 'https://th.bing.com/th/id/R.f1d56a5c933031d4aeccea93616c6599?rik=yHV0AVoc0imxag&riu=http%3a%2f%2fwww.volleywood.net%2fwp-content%2fuploads%2f2014%2f01%2fdmitriy-muserskiy-russia-best-volleyball-player.jpg&ehk=BnI%2bo7QtfWTqbKf2woQWUtqfDyCapu9FBYCKa45c3u4%3d&risl=&pid=ImgRaw&r=0' },
];

const Home = () => {
  return (
    
    <div style={{ padding: '20px' }}>
        <nav><h1>SPORTS</h1></nav>
      <Grid container spacing={3}>
        {/* Display list of icons */}
        
        {icons.map((icon) => (
          <Grid item xs={12} sm={6} md={4} key={icon.id}>
            <Link to={`/icon/${icon.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ boxShadow: 3, cursor: 'pointer', transition: 'transform 0.3s ease' }}>
                <CardMedia
                  component="img"
                  alt={icon.name}
                  height="300"
                  image={icon.imageUrl}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {icon.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {icon.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
