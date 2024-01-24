import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const items = mainCarouselData.map((item)=> <img src={item.image} alt="" />)

const MainCarousel = () => {
    //const navigate = useNavi
   const items = mainCarouselData.map((item)=> <img className='cursor-pointer'  role='presentation' src={item.image} alt="" />)
   
    return(
        <AliceCarousel
       items = {items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1200}
       infinite
    />
    )
    
};

export default MainCarousel;