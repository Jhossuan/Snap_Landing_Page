import React from 'react'
import styled from 'styled-components'
import MobileImage from '../images/image-hero-mobile.png'
import DesktopImage from '../images/image-hero-desktop.png'
import { Container } from '../App'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

const Main = () => {
  return (
    <ContenedorMain>
    <MobileImg src={MobileImage} alt='Mobile Image' />
    <DesktopImg src={DesktopImage} alt='Desktop Image'/>
    <Container padding='30px 20px'>
      <Content>
        <p>Make remote work</p>
        <span>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</span>
        <button className='learn_more'>Learn More</button>
        <Marcas>
          <img src={databiz} alt='databiz'/>
          <img src={audiophile} alt='audiphile'/>
          <img src={meet} alt='meet'/>
          <img src={maker} alt='maker'/>
        </Marcas>
      </Content>
    </Container>
    </ContenedorMain>
  )
}

export default Main

const ContenedorMain = styled.div`
  display:flex;
  flex-direction:column;
  @media screen and (min-width: 836px){
    display:flex;
    flex-direction:row-reverse;
    align-items:center;
    justify-content:space-around;
  }
`

const MobileImg = styled.img`
    margin-top:20px;
    width:100vw;
    @media screen and (min-width: 836px){
    display:none;
  }
`

const DesktopImg = styled.img`
width:25rem;
float:right;
margin:0 5rem 5rem 0;
    @media screen and (max-width: 836px){
    display:none;
  }
`

const Content = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
    p{
      font-size:9vw;
      font-weight:700;
      color:hsl(0, 0%, 8%);
      margin:20px 0 20px 0;
    }
    span{
      color:hsl(0, 0%, 41%);
      line-height:25px;
      font-size:4vw;
    }
    .learn_more{
      padding:15px 25px;
      border:none;
      border-radius:12px;
      background: hsl(0, 0%, 8%);
      color:hsl(0, 0%, 98%);
      width:8rem;
      margin:40px 0;
      border:1px solid black;
      transition:all 0.1s;
      cursor:pointer;
        &:hover{
          background:transparent;
          color: hsl(0, 0%, 8%)
        }
    }
    @media screen and (min-width: 836px){
      width:40vw;
      text-align:left;
      justify-content:flex-start;
      align-items: stretch;
      /* border:1px solid red; */
      padding:50px;
      p{
        font-size:6vw;
      }
      span{
        font-size:1.5vw;
      }
    }
`

const Marcas = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
    img{
      width:70px;
    }
    @media screen and (min-width: 836px){
      /* border:1px solid red; */
      margin:40px 0 0 0;
    }
`