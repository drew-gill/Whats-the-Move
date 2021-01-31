import React from 'react';
import 'firebase/firestore';
import { useFirestore} from 'reactfire';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Divider from '@material-ui/core/Divider'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';



function AddData() {
    const[activityName, setActivityName] = React.useState("");
    const[cost, setCost] = React.useState("");
    const[latitude, setLatitude] = React.useState("");
    const[longitude, setLongitude] = React.useState("");
    const[openTime, setOpenTime] = React.useState("09:30");
    const[closeTime, setCloseTime] = React.useState("17:30");
    const[minAge, setMinAge] = React.useState("");
    const firestore = useFirestore();

    const [state, setState] = React.useState({
        local: false,
        covid: false,
        ada: false,
        equip: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newDocument = {
            name: activityName, 
            price: parseInt(cost),
            lat: parseFloat(latitude), 
            lng: parseFloat(longitude),
            ageReq: parseInt(minAge),
            locallyOwned: state.local,
            covidSafe: state.covid,
            accessible: state.ada,
            equipmentNeeded: state.equip,
            timeOpen: openTime,
            timeClose: closeTime
        };
        return firestore.collection("Moves").add(newDocument);
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputLabel>Name of activity</InputLabel>
            <Input value={activityName} onChange={e => setActivityName(e.target.value)} />
            
            <InputLabel>Cost per Person ($)</InputLabel>
            <Input value={cost} type="number" onChange={e => setCost(e.target.value)} />

            <InputLabel>Latitude</InputLabel>
            <Input value={latitude} type="number" onChange={e => setLatitude(e.target.value)} />

            <InputLabel>Longitude</InputLabel>
            <Input value={longitude} type="number" onChange={e => setLongitude(e.target.value)} />

            <InputLabel>Minimum age requirement</InputLabel>
            <Input value={minAge} type="number" onChange={e => setMinAge(e.target.value)} />

            <Divider/>

            <InputLabel>Opening Time</InputLabel>
            <TextField
                type="time"
                value={openTime}
                inputProps={{
                step: 300, // 5 min
                }}
                onChange={e => setOpenTime(e.target.value)}
            />

            <InputLabel>Closing Time</InputLabel>
            <TextField
                type="time"
                value={closeTime}
                inputProps={{
                step: 300, // 5 min
                }}
                onChange={e => setCloseTime(e.target.value)}
            />


            <Divider/>
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


            <Input type="submit" value="Submit" />
        </form>
    );
  }

  export default AddData