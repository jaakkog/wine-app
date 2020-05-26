import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const Search = ( { pairing, setPairing } ) => {

  const [newPair, setNewPair] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked', event.target)
    setPairing(newPair)
    console.log('pairing', pairing)
}

const handleChange = (event) => {
  setNewPair(event.target.value)
  console.log(event.target.value)
  setPairing('')
}

    return (
        <form onSubmit={handleSubmit}>
            <input id="food" value={newPair} onChange={handleChange} />
          <button id="submit" type="submit">Find a wine for me </button>
        </form>
      );
}

export default Search ;