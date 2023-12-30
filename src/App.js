import React, { useState } from 'react';
//import chatBot from 'react-simple-chatbot';
import './App.css';
import Nav from './Nav';
import Page from './Page';
import Chatbot from './Chatbot';
import Ai from './Ai';
import Bservice from './Bservice';
import AVservice from './AVservice';
import Footer from './Footer';
import Chat from './Chat';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const myState = useSelector((state)=> state.changeState);
  return (
    <div className="App">
      <Nav/>
      {
        myState ? <Chat/>:<Chatbot/>
      }
      <Page/>
      <Ai/>
      <Bservice/>
      <AVservice/>
      <Footer/>
    </div>
  );
}

export default App;
