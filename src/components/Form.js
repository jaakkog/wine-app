import React, { useState } from 'react';
import { Form, TextField, Button } from '../styles';


const Search = ( { pairing, setPairing } ) => {

  const [newPair, setNewPair] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setPairing(newPair)
    console.log('pairing', pairing)
}

const handleChange = (event) => {
  setNewPair(event.target.value)
  setPairing('')
}

    return (
      <div>
        <h3>Find a wine that goes with a food</h3>
        <Form>
            <TextField type="text" placeholder="What are you eating?" id="food" value={newPair} onChange={handleChange} />
          <Button id="submit" type="submit" onClick={handleSubmit}>Find a wine for me </Button>
        </Form>
        <p>Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian")</p>
        </div>
      );
}

export default Search ;