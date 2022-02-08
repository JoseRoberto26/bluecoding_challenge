import HomePage from './containers/HomePage/HomePage';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import { Container } from '@material-ui/core';
import './App.styles.scss';


const App = () => {
 return (
  <Router>
    <Container className='main-container'>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </main>
    </Container>
</Router>
 )
}
export default App;