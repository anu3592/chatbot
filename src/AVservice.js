import { useState } from 'react';
import AV from './av.png';

const AVservice = ()=>{
    const [image, setImage] = useState(AV);
    return (
        <div className="flex flex-col m-10">
            <h1 className="text-[35px] font-bold">AR and VR</h1>
            <div className='flex lg:flex-row flex-col sm:justify-between justify-center m-10'>
            <img src={image} className='w-[30%] h-[300px] float-right'/>
            <p className="w-[50%] border-solid rounded-xl shadow-xl float-right text-lg m-3 p-4">As a VR and AR development service provider based out of India, Trigensoft is dedicated to delivering the ultimate experience when it comes to cutting edge AR and VR gaming solutions, stunning high-definition visuals, real-time flexibility, and highly immersive services for gaming apps. We prioritize high-quality graphics, ease of usage, and great UI UX to render an experience like none other.</p>
            </div>
        </div>
    )
}

export default AVservice;
