import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    local: false,
    covid: false,
    ada: false,
    equip: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filters</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.local} onChange={handleChange} name="local" />}
          label="Locally Owned"
        />
        <FormControlLabel
          control={<Switch checked={state.covid} onChange={handleChange} name="covid" />}
          label="Covid Safe"
        />
        <FormControlLabel
          control={<Switch checked={state.ada} onChange={handleChange} name="ada" />}
          label="ADA compliant"
        />
         <FormControlLabel
          control={<Switch checked={state.equip} onChange={handleChange} name="equip" />}
          label="Needs Extra Equipment"
        />
      </FormGroup>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}
