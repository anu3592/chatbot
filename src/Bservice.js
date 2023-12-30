import { useState } from 'react';
import Block from './block.png';

const Bservice = ()=>{
    const [image, setImage] = useState(Block);
    return (
        <div className="flex flex-col m-10">
            <h1 className="text-[35px] font-bold">Block Chain</h1>
            <div className='flex lg:flex-row flex-col sm:justify-between justify-center m-10'>
            <img src={image} className='w-[30%] h-[300px] float-right'/>
            <p className="w-[50%] border-solid rounded-xl shadow-xl float-right text-lg m-3 p-4">Blockchain as a service involves the third-party installation and maintenance of blockchain networks for a company’s technologies. Given that any company can tap into blockchain networks, BaaS companies essentially serve as blockchain services companies or blockchain infrastructure providers. Based on the software-as-a-service model, BaaS software helps businesses develop and host blockchain apps and smart contracts in cloud-based blockchain ecosystems. In other words, BaaS makes blockchain capabilities more accessible and usable in a business.</p>
            </div>
        </div>
    )
}

export default Bservice;
