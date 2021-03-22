import React from 'react'
import { Column2, ImgWrap, InfoContainer, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoWrapper,Img } from './InfoElements'
import {Button} from '../ButtonElement'
import img from '../../images/best-whey.jpg'


const InfoScetion = ({lightBg, imgStart, topLine, lightText, headline, darkText, description, buttonLabel,  alt, id}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                          <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button primary='true' dark='true'>{buttonLabel}</Button>
                            </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                            <Img src={img} alt={alt} />
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoScetion
