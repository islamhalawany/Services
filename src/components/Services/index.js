import React from 'react'
import {ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/EVLTest-Squares-Athletes-Plain-3-5_1200x Marketing.jpg.webp'
import Icon2 from '../../images/Blueberry Cobblar.jpg'
import Icon3 from '../../images/BPI WHEY 4.67 LB.jpg'



const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1> Our Services</ServicesH1>
            <servicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Turn Fat Into Fit</ServicesH2>
                    <ServicesP>We help Sclubtring your Body </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Available 24/7</ServicesH2>
                    <ServicesP>You can Conatct Us anytime </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Nutrition Freaks</ServicesH2>
                    <ServicesP>Get Your Calories calculated & Choose Your premium Supplement</ServicesP>
                </ServicesCard>
            </servicesWrapper>
        </ServicesContainer>
    )
}

export default Services
