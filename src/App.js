import React, { useState } from 'react';
import Quote from './components/randomQuote';
import Wines from './components/Wines';
import Search from './components/Form';
import { Page, Footer, Header, Content } from './styles';


const App = () => {

  const [pairing, setPairing] = useState('')

  return (
    <div>
    <Page>
      <Header>
        Wine Pairing App
       </Header>
      <Content>
        <p>Find a wine that goes well with a food. </p>
      <Search pairing={pairing} setPairing={setPairing}/>
        <p>Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian")</p>
      <Wines pairing={pairing} setPairing={setPairing}/>
      </Content>
      <Footer>
      <Quote />
      </Footer>
     </Page>
    </div>
  );
}

export default App;