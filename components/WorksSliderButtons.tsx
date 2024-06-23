'use client'
import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

interface WorksSliderButtonsProps {
    containerStyles: string;
    buttonStyles: string;
    iconsStyle?: string
}

const WorksSliderButtons = ({ containerStyles, buttonStyles, iconsStyle }: WorksSliderButtonsProps) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyle} />
            </button>
            <button className={buttonStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyle} />
            </button>
        </div>
    )
}

export default WorksSliderButtons