import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  margin: {
    height: theme.spacing(5),
  },
}));

// Below is for slider 
function valuetext(value) {
    return `${value}°C`;
  }
  const marks = [
    {
      value: 1,
      label: '1 mile',
    },
    {
        value: 5,
        label: '5 miles',
      },
      {
        value: 10,
        label: '10 miles',
      },
      {
        value: 20,
        label: '20 miles',
      },
    {
        value: 15,
        label: '15 miles',
      },
    {
      value: 25,
      label: '25 miles',
    },
  ];

  export default function DistanceSlider(props) {
    const classes = useStyles();
  
    const [value, setValue] = React.useState(props.sliderValue);

    const handleChange = (event, newValue) => {
      setValue(newValue)
      props.sendDistanceChange(value)
    }

    return (
      <div className={classes.root}>
        <Typography id="discrete-slider-custom" gutterBottom>
          How Far?
        </Typography>
        <Grid container spacing={5}>
            <Grid item>
                <HomeIcon/>
            </Grid>          
            <Grid item xs>
              <Slider
                value={props.sliderValue}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={1}
                max={25}
                onChange={handleChange}
            />
            </Grid>
            <Grid item>
                <DirectionsCarIcon/>
            </Grid>   
      </Grid>
      </div>
    );
  }
 