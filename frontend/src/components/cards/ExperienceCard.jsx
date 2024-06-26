import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ExperienceCard(props) {
  return (
    <Box sx={{ width: 350, height: 200, margin: '0 5px', boxShadow: 3 }}>
      <Card sx={{ marginBottom: 1, width: 350, height: 200}} variant="outlined">
        <CardContent>
          <Typography  variant="h5" component="div">
            {props.company}
          </Typography>
          <Typography sx={{ mb: 2 }} color="text.secondary">
            {props.title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {props.team}
          </Typography>
          <Typography variant="body2">
            {props.tech_stack}
          </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>       */}
      </Card>
    </Box>
  );
}
