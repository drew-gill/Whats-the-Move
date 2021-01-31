import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DistanceSlider from './DistanceSlider';
import MoneySlider from './MoneySlider';
import FindMove from './FindMove';
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CardMenu() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h4" component="h1" style={{ fontWeight: 600 }}>
          What Do You Want To Do?

        </Typography>

        <DistanceSlider/>
        <MoneySlider/>
       <FindMove/>
      </CardContent>
     
    </Card>
  );
}
