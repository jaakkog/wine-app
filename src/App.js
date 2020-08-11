import React, { useState } from 'react';
import Quote from './components/randomQuote';
import Wines from './components/Wines';
import Search from './components/Form';
import HomePage from './components/HomePage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Footer, StyledMenu, StyledBurger } from './styles';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"


const App = () => {

  const [pairing, setPairing] = useState('')
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
    <div>
    <GlobalStyles/>
    <Router>
      <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
        <StyledMenu open={open}>
        <Link to="/">Home</Link>
        <Link to="/wines">Wines</Link>
        </StyledMenu>
      </div>
      <Switch>
        <Route path="/wines">
        <Search pairing={pairing} setPairing={setPairing}/>
        <Wines pairing={pairing} setPairing={setPairing}/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Footer>
        <Quote />
      </Footer>
     </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;