import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import ArrowDown from '../images/icon-arrow-down.svg'
import ArrowUp from '../images/icon-arrow-up.svg'
import IconMenu from '../images/icon-menu.svg'
import IconCloseMenu from '../images/icon-close-menu.svg'
import Todo from '../images/icon-todo.svg'
import Calendar from '../images/icon-calendar.svg'
import Reminder from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'
s
const Header = () => {

const [active, setActive] = useState(true)
const [activeArrowFeatures, setActiveArrowFeatures] = useState(true)
const [activeArrowCompany, setActiveArrowCompany] = useState(true)
const toggleBtn = () => {
    setActive(!active)
}


  return (
    <Navegacion>
      <img src={Logo} alt='logo' className='logo'/>
      <img className='BurgerBtn' src={active ? IconMenu : IconCloseMenu} alt='Menu' onClick={toggleBtn}/>
      <Panel className={active ? '' : 'active'}>
          <ListaOrdenada>
            <Items className={activeArrowFeatures ? '' : 'active'} onClick={()=>setActiveArrowFeatures(!activeArrowFeatures)}>Features<img src={activeArrowFeatures ? ArrowDown : ArrowUp} alt='Arrow'/></Items>
              <Links className={activeArrowFeatures ? '' :'active'}>
              <Item><img src={Todo} alt="iconos" /> Todo List</Item>
              <Item><img src={Calendar} alt="iconos" /> Calendar</Item>
              <Item><img src={Reminder} alt="iconos" /> Reminders</Item>
              <Item><img src={Planning} alt="iconos" /> Planning</Item>
              </Links>
            <Items className={activeArrowCompany ? '' : 'active'} onClick={()=>setActiveArrowCompany(!activeArrowCompany)}>Company<img src={activeArrowCompany ? ArrowDown : ArrowUp} alt='Arrow'/></Items>
              <Links className={activeArrowCompany ? '' : 'activeCompany'}>
                <Item>History</Item>
                <Item>Our Team</Item>
                <Item>Blog</Item>
              </Links>
            <Items>Careers</Items>
            <Items>About</Items>
          </ListaOrdenada>
          <Botones>
            <button className='loginbtn'>Login</button>
            <button className='registerbtn'>Register</button>
          </Botones>
      </Panel>
    </Navegacion>
  );
}

export default Header

const Navegacion = styled.nav`
    background: transparent;
    height: 4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .BurgerBtn{
        z-index:999;
    }
    @media screen and (min-width: 836px) {
        justify-content: flex-start;
            .BurgerBtn{
                display:none;
            }
    }
`

const Panel = styled.div`
  background:white;
  width:65vw;
  position: fixed;
  top: 0;
  right:0;
  bottom:0;
  transition: transform 0.3s ease;
  transform: translate(100%, 0);
  z-index:998;
  &.active{
    transform: translate(0, 0);
  };
  @media screen and (min-width: 836px){
    transform: translate(0, 0);
    background:transparent;
    position:absolute;
    display:flex;
    width:85vw;
    height:2rem;
    margin:25px 0;
    /* border:1px solid red; */
    }
`

const Botones = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  .loginbtn {
    border: none;
    background: transparent;
    color: hsl(0, 0%, 41%);
    font-size: 18px;
    margin: 0 0 10px 0;
    cursor:pointer;
    &:active, :hover {
      color: hsl(0, 0%, 9%);
    }
  }
  .registerbtn {
    padding: 12px 25px;
    border: none;
    border-radius: 12px;
    border: 1.5px solid hsl(0, 0%, 41%);
    color: hsl(0, 0%, 41%);
    width: 100%;
    transition: all 0.1s;
    background: transparent;
    font-size: 18px;
    cursor:pointer;
    &:active, :hover {
      color: hsl(0, 0%, 9%);
      border: 1.5px solid hsl(0, 0%, 9%);
    }
  }
  @media screen and (min-width: 836px){
    border:1px solid red;
    flex-direction: row;
    float: right;
    margin: 0 18vw;
    border:none;
    .loginbtn {
      padding: 12px 25px;
      color: hsl(0, 0%, 41%);
      width: 100%;
      transition: all 0.1s;
      background: transparent;
      font-size: 18px;
      margin:0;
    }
    .registerbtn {
      width: 8rem;
      margin: 0;
    }
    }
  @media screen and (min-width: 1300px) {
    margin: 0 35vw;
  }
`;

const ListaOrdenada = styled.ul`
    display:flex;
    flex-direction:column;
    margin:3.5rem 0;
    @media screen and (min-width: 836px){
        margin:0;
        flex-direction:row;
        width:20rem;
        align-items:normal;
    }
`

const Items = styled.li`
    list-style:none;
    padding:.7rem 1rem;
    font-size:18px;
    color:hsl(0, 0%, 41%);
    text-align:left;
    display:flex;
    align-items:center;
    transition:all 0.1s;
    outline:none;
    cursor:pointer;
        img{
            margin:0 0 0 10px;
        }
    &.active, :active{
      color:#000;
    }
    @media screen and (min-width: 836px){
      padding:0 0 0 2rem;
      &.active, :hover{
        color: #000;
      }
    }
`

const Links = styled.div`
  color:hsl(0, 0%, 41%);
  display:none;
  font-size:18px;
  transition:all 0.2s ease-in-out;
  &.active{
    display:flex;
    flex-direction:column;
  }
  &.activeCompany{
    display:flex;
    flex-direction:column;
  }
  @media screen and (min-width: 836px){
    padding:20px;
    &.active{
      background:white;
      box-shadow:0 0 40px 1px #00000022;
      border-radius:10px;
      position:absolute;
      left:-2rem;
      top:2rem;
    }
    &.activeCompany{
      background:white;
      box-shadow:0 0 40px 1px #00000022;
      border-radius:10px;
      position:absolute;
      left:11rem;
      top:2rem;
    }
  }
`

const Item = styled.span`
  margin:15px 40px;
  @media screen and (min-width: 836px){
    margin:10px 10px;
  }
`