import logo from './logo.svg';
import './App.css';
import 'firebase/firestore'
import { useFirestore, useFirestoreDocData} from 'reactfire';
import React, {Suspense} from 'react'
import Button from '@material-ui/core/Button';

import BackgroundMap from "./Components/BackgroundMap"
import { GoogleMap } from '@react-google-maps/api';
import DrawerComponent from './Components/DrawerComponent'
import PersistentLeft from './Components/PersistentLeft';


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
        <div id="wrapper">
          <BackgroundMap/>

          <div id="over_map">
            <PersistentLeft/>
          </div>
          <div id="over_map_centered">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.<br></br> EEEEEEEEEEEEEEEEEEEEEEEP ILCH eep MONKEY oop sayhitobiscuitforme
              </p>

              {/*<DrawerComponent/>   Do not use  */}
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
              <Suspense fallback={"loading firebase description..."}>
                <Move />
              </Suspense>
            </div>


        </div>
        
      </header>
      
      
    </div>
  );
}

export default App;
