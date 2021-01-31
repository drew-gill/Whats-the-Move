import './App.css';
import 'firebase/firestore'
//import { useFirestore, useFirestoreDocData} from 'reactfire';
import React from 'react'

import BackgroundMap from "./Components/BackgroundMap"

import PersistentLeft from './Components/PersistentLeft';
import CardMenu from './Components/CardMenu';
//-----------------------------------------------------------------------------IMPORTS ABOVE THIS LINE
//Get a "Move" object from Firebase
// function Move(){
//   // lazy load the Firestore SDK and create a document reference
//   const theMoveRef = useFirestore() 
//     .collection('Moves')
//     .doc('exampleSwampHacks');

//   // subscribe to the doc. just one line!
//   const {status, data} = useFirestoreDocData(theMoveRef);

//   // get the value from the doc
//   if(status === "loading"){
//     return <p>Fetching the Move's accessibility</p>
//   }
//   return <p>The location is {data.accessible ? 'accessible' : 'not accessible'}</p>;
// }


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
             
              <CardMenu/>
          </div>


        </div>
        
      </header>
      
      
    </div>
  );
}

export default App;
