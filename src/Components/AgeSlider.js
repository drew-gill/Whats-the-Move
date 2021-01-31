import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
  },
  margin: {
    height: theme.spacing(5),
  },
}));

const marks = [
  {
    value: 10,
    label: '>10',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 21,
    label: '21+',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function AgeSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Minimum Age
      </Typography>
      <Slider
        defaultValue={21}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={10}
        max={21}
      />
    </div>
  );
}