'use client'

import { useSwiper } from "swiper/react"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSliderBtn({containerStyles, btnStyles, iconsStyles}) {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <ChevronLeft className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <ChevronRight className={iconsStyles}/>
            </button>
        </div>
    );
};