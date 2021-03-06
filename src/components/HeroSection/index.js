import React, {useState} from 'react'
import Video from '../../Video/Video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'



const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Welcome To The Jungle</HeroH1>
                <HeroP> Sign Up for Detailed Training & Nutrition </HeroP>
                <HeroBtnWrapper>
                    <Button to='SignUp' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
