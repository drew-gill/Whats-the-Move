import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useFirestore} from 'reactfire';
import Link from '@material-ui/core/Link';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

let rad = function(x) {
  return x * Math.PI / 180;
};

const center = {
  lat: 29.64808581127794, 
  lng: -82.34378140944524
};

let getDistance = function(lat1, long1, lat2, long2) {
  let R = 6378137; // Earth’s mean radius in meter
  let dLat = rad(lat2 - lat1);
  let dLong = rad(long2 - long1);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d; // returns the distance in meter
};

//to 1 decimal point!
let metersToMiles = function(meters){
  return (meters/1609).toFixed(1);
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function FindMove(props) {
  const [open, setOpen] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState(center);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [viewedOptions, setViewedOptions] = React.useState(new Set());
  const firestore = useFirestore();

  const handleClickOpen = () => {
    //open the overlay menu
    setOpen(true);

    //get current users location
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
    
        setUserLocation({lat: latitude, lng: longitude});

        //after getting location, search database for a possible match
        firestore.collection('Moves')
        .where("price", "<=", props.costMax)
          .get()
          .then(function(querySnapshot){
            let valid = false;
            for(let i = 0; i < querySnapshot.docs.length; i++){
              console.log(metersToMiles(getDistance(querySnapshot.docs[i].data().lat, querySnapshot.docs[i].data().lng, userLocation.lat, userLocation.lng)));
              console.log(viewedOptions);
              if(metersToMiles(getDistance(querySnapshot.docs[i].data().lat, querySnapshot.docs[i].data().lng, userLocation.lat, userLocation.lng)) < props.distanceMax && !viewedOptions.has(querySnapshot.docs[i].data().name)){
                setData(querySnapshot.docs[i].data());
                setLoading(false);
                setViewedOptions(viewedOptions.add(querySnapshot.docs[i].data().name))
                valid = true;
                break;
              }
            }
            //if all options are exhausted
            if(!valid){
              setData({
                name: "Take a walk outside!",
                price: 0,
                lat: userLocation.lat,
                lng: userLocation.lng,
                ageReq: 0,
                covidSafe: true,
                accessible: true,
                equipmentNeeded: false
              });
              setLoading(false);
            }
            })
          .catch(function(error){
            console.log("Error getting documents: ", error);
          })
      });
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(true);
  };

  // get the value from the doc
  if(loading){
    return <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{maxWidth: '400px', maxHeight: '50px', minWidth: '400px', minHeight: '50px'}}>
        Find A Move!
      </Button>

    </div>
  }


  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{maxWidth: '400px', maxHeight: '50px', minWidth: '400px', minHeight: '50px'}}>
        Find A Move!
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {data.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Price Point = About ${data.price}
          </Typography>
          <Typography gutterBottom>
            Distance = About {metersToMiles(getDistance(data.lat, data.lng, userLocation.lat, userLocation.lng))} miles
          </Typography>
          <Typography gutterBottom>
            Age limit = {data.ageReq}+
            <br/>
            COVID safe? = {data.covidSafe ? 'Yes!' : 'No'}
            <br/>
            ADA accessible? = {data.accessible ? 'Yes!' : "No"} 
            <br/>
            Requires equipment? = {data.equipmentNeeded ? 'Yes' : 'No!'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            <Button autoFocus onClick={handleClose} color="primary">
              Take Me There!
            </Button>
          </Link>
          <Button autoFocus onClick={handleClickOpen} color="secondary">
            Nah try again...
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}