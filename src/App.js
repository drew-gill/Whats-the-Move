import logo from './logo.svg';
import './App.css';
import 'firebase/firestore'
import { useFirestore, useFirestoreDocData} from 'reactfire';
import React, {Suspense} from 'react'
import Button from '@material-ui/core/Button';
/*
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
*/
//-----------------------------------------------------------------------------IMPORTS ABOVE THIS LINE
//Get a "Move" object from Firebase
function Move(){
  // lazy load the Firestore SDK and create a document reference
  const theMoveRef = useFirestore() 
    .collection('Moves')
    .doc('exampleSwampHacks');

  // subscribe to the doc. just one line!
  const {status, data} = useFirestoreDocData(theMoveRef);

  // get the value from the doc
  if(status === "loading"){
    return <p>Fetching the Move's accessibility</p>
  }
  return <p>The location is {data.accessible ? 'accessible' : 'not accessible'}</p>;
}

/*
function GetMove(){
  const theMoveRef = useFirestore() 
    .collection('Moves')
    .doc('exampleSwampHacks');

  // subscribe to the doc. just one line!
  const {status, data} = useFirestoreDocData(theMoveRef);

  return {status, data};
}
*/

class SuggestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    //get info from the hardcoded document in the database
    //const {status, data} = GetMove();

    alert('The move is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
/*
-------------------------------------------------------------------------Testcode for menu
*/
/*
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

*/

/*
----------------------------------------------------------------------------------------------APP STARTS HERE
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br></br> EEEEEEEEEEEEEEEEEEEEEEEP ILCH eep MONKEY oop sayhitobiscuitforme
        </p>
        <a
          className="App-link"
          href="https://youtu.be/e4iXrrbO_YY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to go to Cow Planet!
        </a>

          <Button variant="contained" color="primary">
             Hello World
          </Button>
          
        <SuggestionForm />
      </header>
      <Suspense fallback={"loading firebase description..."}>
        <Move />
      </Suspense>
    </div>
  );
}

export default App;
