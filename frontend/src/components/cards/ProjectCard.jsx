import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lion from '../../images/lion.png';

export default function ProjectCard(props) {
  return (
    <Card sx={{ width: 340, height: 450, boxShadow: 6, margin: 2, borderRadius: '8px' }}>
      <CardMedia
        sx={{ height: 240 }}
        image={ lion }
        title={ props.title }
      />
      <CardContent>
        <Typography 
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '200px'
          }}
          gutterBottom 
          variant="h6" component="div"
        >
          { props.title }
        </Typography>
        <Typography 
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2, 
            lineHeight: '1.2em', 
            height: '2.4em',
          }}
          variant="body3" 
          color="text.secondary"
          component="div"
        >
          { props.description }
        </Typography>
        <Typography 
          sx={{
            marginTop: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '200px'
          }}
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
