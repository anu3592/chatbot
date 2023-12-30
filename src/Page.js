import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from 'react-icons/rx'
function Page()
{
    const sliders = [
        {
            url : "https://www.analyticsinsight.net/wp-content/uploads/2022/10/Artificial-Intelligence-Market-Size-to-Reach-US407-Billion-By-2027.jpg"
        },
        {
            url : "https://www.blockchainmagazine.net/wp-content/uploads/web3-blockchain-3.jpg"
        },
        {
            url : "https://www.xrtoday.com/wp-content/uploads/2021/03/VR-More-Popular-Than-AR-1.png"
        },
    ]
    const [currentInd, setCurrentInd] = useState(0)
    const prevSlide = ()=>{
        const isFirstSlide = currentInd ===0
        const newInd = isFirstSlide ? sliders.length-1 : currentInd-1
        setCurrentInd(newInd)
    }
    const nextSlide = ()=>{
        const isLastSlide = currentInd === sliders.length-1
        const newInd = isLastSlide ? 0 : currentInd+1
        setCurrentInd(newInd)
    }
    const moveToSlide = (slideIndex)=>{
        setCurrentInd(slideIndex)
    }
    return(
        <div className="max-w-[1520px] h-[400px] w-full py-4 px-4 relative group">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            style={{backgroundImage: `url(${sliders[currentInd].url})`}}>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-600 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide}/>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-600 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide}/>
            </div>
            <div className="flex top-4 justify-center py-2">
                {
                    sliders.map((sliderItems, sliderIndex)=>(
                        <div key={sliderIndex} onClick={()=>moveToSlide(sliderIndex)} className="text-2xl cursor-pointer">
                            <RxDotFilled/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page
