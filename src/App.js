import React, { useState } from 'react';
import Quote from './components/randomQuote';
import Wines from './components/Wines';
import Search from './components/Form';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;



const App = () => {

  const [pairing, setPairing] = useState('')
  console.log('pairing', pairing)


  return (
    <div>
    <Layout style={{ fontFamily: 'Roboto'}}>
    <Header style={{marginLeft: '15vh', marginTop: '0vh', fontSize: '4vh'}}>
     <h1>Wine Pairing App</h1>
     </Header>
     <Content style={{textAlign: 'center', marginTop: '10vh'}}>
     <p style={{fontSize: '3vh'}}>Find a wine that goes well with a food. </p>
     <Search pairing={pairing} setPairing={setPairing} style={{justify: 'center', marginTop: '15vh'}}/>
     <p style={{ marginTop: '4vh' }}>Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian")</p>
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