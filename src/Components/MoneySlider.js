import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
  },
  margin: {
    height: theme.spacing(5),
  },
}));

const marks = [
  {
    value: 1,
    label: 'Free!',
  },
  {
    value: 2,
    label: '$',
  },
  {
    value: 3,
    label: '$$',
  },
  {
    value: 4,
    label: '$$$',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function MoneySlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={3}>
               
      </Grid>  
      <Grid item xs>
      <Typography id="discrete-slider-custom" gutterBottom>
        How Much?
      </Typography>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
            <Grid item xs={3}>
               
            </Grid>          
            <Grid item xs>
            <Slider
                defaultValue={2}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks={marks}
                min={1}
                max={4}
            />
            </Grid>
            <Grid item>
               
            </Grid>   
      </Grid>
    </div>
  );
}