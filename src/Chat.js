import { useState } from 'react';
import chat from './chat.png';
import {useSelector, useDispatch} from 'react-redux';
import { reverse } from './actions';
const Chat = ()=>{
    const [image, setImage] = useState(chat);
    const myState = useSelector((state)=>state.changeState)
    const dispatch = useDispatch();
    return (
        <div className='fixed z-10 top-[90%] left-[90%] cursor-pointer'>
            <button type='button' onClick={()=>dispatch(reverse())}>
            <img
                src={image}
                alt='chat icon'
                height={50}
                width={50}
                className='rounded-full'
            />
            </button>
        </div>
    )
}

export default Chat;
