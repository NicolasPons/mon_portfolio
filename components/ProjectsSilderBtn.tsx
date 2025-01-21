'use client'

import { useSwiper } from "swiper/react"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSliderBtn({containerStyles, btnStyles, iconsStyles}) {
    const swiper = useSwiper();
    console.log("je suis dans le projectssliderbtn");
    console.log(swiper);

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => {
                console.log('Previous slide');
                swiper.slidePrev();
            }}>
                <ChevronLeft className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={() => {
                console.log('Next slide');
                swiper.slideNext();
            }}>
                <ChevronRight className={iconsStyles}/>
            </button>
        </div>
    );
};
