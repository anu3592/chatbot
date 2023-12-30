import { useState } from 'react';
import AImage from './ai.png';

const Ai = ()=>{
    const [image, setImage] = useState(AImage);
    return (
        <div className="flex flex-col m-10">
            <h1 className="text-[35px] font-bold">Articial Intelligence</h1>
            <div className='flex lg:flex-row flex-col sm:justify-between justify-center m-10'>
            <img src={image} className='w-[30%] h-[300px] float-right'/>
            <p className="w-[50%] border-solid rounded-xl shadow-xl float-right text-lg m-3 p-2">Commit to new vectors of growth as well as supporting long-term digital transformation with Avenga AI services. Tapping into our extensive tech expertise, you can create, maintain, and scale up your Artificial Intelligence and Machine Learning solutions while augmenting human capacity and increasing business value. Utilize generative AI and responsible AI practices, ensuring your AI tools align with the highest standards of ethics and efficiency.</p>
            </div>
        </div>
    )
}

export default Ai;
