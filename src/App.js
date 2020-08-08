import React, { useState } from 'react';
import Quote from './components/randomQuote';
import Wines from './components/Wines';
import Search from './components/Form';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;



const App = () => {

  const [pairing, setPairing] = useState('')

  return (
    <div>
    <Layout style={{ fontFamily: 'Roboto'}}>
      <Header style={{marginLeft: '12vh', marginTop: '0vh', fontSize: '3vh'}}>
        <h1>Wine Pairing App</h1>
       </Header>
      <Content style={{textAlign: 'center', margin: '10vh 10vh', justify: 'center'}}>
        <p style={{fontSize: '3vh'}}>Find a wine that goes well with a food. </p>
      <Search pairing={pairing} setPairing={setPairing} style={{justify: 'center', margin: '15vh'}}/>
        <p style={{ margin: '2vh', fontSize: '3vh' }}>Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian")</p>
      <Wines pairing={pairing} setPairing={setPairing}/>
      </Content>
      <Footer style={{textAlign: 'center', marginTop: '20vh', marginBottom: '5vh'}}>
      <Quote />
      </Footer>
     </Layout>
    </div>
  );
}

export default App;