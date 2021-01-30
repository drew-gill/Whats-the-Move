import logo from './logo.svg';
import './App.css';
import 'firebase/firestore'
import { useFirestore, useFirestoreDocData} from 'reactfire';
import React, {Suspense} from 'react'

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

/*To load from firestore, use
SuspenseWithPerf
We need to do this because useFirestoreDocData throws a Promise 
while it is waiting for a response from Firestore. 
Suspense will catch the Promise and render fallback until the 
Promise is resolved.
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. EEEEEEEEEEEEEEEEEEEEEEEP ILCH eep ilch
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Suspense fallback={"loading firebase description..."}>
        <Move />
      </Suspense>
    </div>
  );
}

export default App;
