import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

  const [distanceMax, setDistanceMax] = React.useState(5);
  const [costMax, setCostMax] = React.useState(2);
  const [actualCost, setActualCost] = React.useState(15);

  const handleDistanceChange = (childData) =>{
    setDistanceMax(childData);
  };

  const handleCostChange = (childData) =>{
    setCostMax(childData);
    if(costMax === 1){
      setActualCost(0);
    } else if(costMax === 2){
      setActualCost(15);
    } else if(costMax === 3){
      setActualCost(30);
    } else{
      setActualCost(10000)
    }

  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h4" component="h1" style={{ fontWeight: 600 }}>
          What Do You Want To Do?

        </Typography>

        <DistanceSlider sendDistanceChange={handleDistanceChange} sliderValue={distanceMax}/>
        <MoneySlider sendCostChange={handleCostChange} sliderValue={costMax}/>
       <FindMove  costMax={actualCost} distanceMax={distanceMax}/>
      </CardContent>
     
    </Card>
  );
}
