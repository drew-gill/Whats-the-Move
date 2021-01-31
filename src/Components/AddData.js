import React from 'react';
import 'firebase/firestore'
import { useFirestore} from 'reactfire';



function AddData() {
    const[value1, setValue1] = React.useState("");
    const[value2, setValue2] = React.useState("");
    const[value3, setValue3] = React.useState("");
    const firestore = useFirestore();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newDocument = {name: value1, username: value2, email: value3};
        console.log(newDocument);
        return firestore.collection("Moves").add(newDocument);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input label="Location Name" value={value1} onChange={e => setValue1(e.target.value)} />
            <input label="Submitter's name" value={value2} onChange={e => setValue2(e.target.value)} />
            <input label="Rating" value={value3} onChange={e => setValue3(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
  }

  export default AddData