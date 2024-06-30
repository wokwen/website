import React, {useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PushPinIcon from '@mui/icons-material/PushPin';
import lion from '../../images/lion.png';

export default function ProjectCard(props) {
  const handleMouseOver = () => {
    const pin = document.getElementById(`${props.id}`);
    if (pin) {
      pin.style.display = 'none';
    }
  };

  const handleMouseLeave = () => {
    const pin = document.getElementById(`${props.id}`);
    if (pin) {
      pin.style.display = 'inline';
    }
  };

  return (
    <Card 
      sx={{ 
        width: 340, 
        height: 480, 
        boxShadow: 6, 
        margin: 2, 
        borderRadius: '8px', 
        ':hover': {
          boxShadow: 20,
          zIndex: 70
        },
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        sx={{ height: 240 }}
        image={ lion }
        title={ props.title }
      />
      <div className="pin-section">
        <div className="pin">
          <PushPinIcon id={`${props.id}`} sx={{ color: 'blue' }} />
        </div>
        <div className="circles-container">
          <CircleIcon sx={{ color: 'red', fontSize: 'small', margin: '3px 2px', border: '1px solid black', borderRadius: '50%' }} />
          <CircleIcon sx={{ color: '#ffdf00', fontSize: 'small', margin: '0 2px', border: '1px solid black', borderRadius: '50%' }} />
          <CircleIcon sx={{ color: 'green', fontSize: 'small', margin: '0 2px', border: '1px solid black', borderRadius: '50%' }} />
        </div>
      </div>
      
      <CardContent>
        <Typography 
          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '200px' }}
          gutterBottom 
          variant="h6" component="div"
        >
          { props.title }
        </Typography>
        <Typography 
          sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.2em', height: '2.4em', }}
          variant="body3" 
          color="text.secondary"
          component="div"
        >
          { props.description }
        </Typography>
        <Typography 
          sx={{ marginTop: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '200px' }}
          gutterBottom 
          variant="body3" component="div"
        >
          { props.built_with }
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center'
        }}
      >
        <Button sx={{ 
          height: '35px',
          fontWeight: 'bold',
          border: '1px solid black', 
          borderRadius: '8px',
          color: 'black', 
          backgroundColor: 'ffffff', 
          textTransform: 'capitalize',
          '&:hover': { 
            color: 'white',
            backgroundColor: 'black' 
            } 
          }}
        >
          Visit!
        </Button>
        <Button sx={{ 
          height: '35px',
          fontWeight: 'bold',
          border: '1px solid black', 
          borderRadius: '8px',
          color: 'black', 
          backgroundColor: 'ffffff', 
          textTransform: 'capitalize',
          '&:hover': { 
            color: 'white',
            backgroundColor: 'black' 
            } 
          }}
        >
            GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
