import ChatBot from 'react-simple-chatbot';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { reverse } from './actions';
import { useState } from 'react';

const Chatbot = () => {
  const dispatch = useDispatch();
  const steps=[
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
    ]
  return (
    <div className='fixed z-10 top-[5%] left-[70%]'>
      <ChatBot
        recognitionEnable={true}
        steps={steps}
      />
      <button type='button' onClick={() => dispatch(reverse())}><IoMdCloseCircleOutline size={20} className="fixed z-20 top-[6%] left-[68.5%] cursor-pointer" /></button>
    </div>
  )
}

export default Chatbot;
