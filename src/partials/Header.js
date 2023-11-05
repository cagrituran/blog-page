import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
const StyledHeader = styled.div`
    height:8vh;
    background-color: #465775;
    padding:0 80px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo-container {
        flex: 0.5;
        img{
            height:10vh;
        }
    }

    .menu-container {
        flex: 0.5;
    }

    ul li {
        float:left;
        color:#FFF;
    }

    nav {
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }

    ul {
        list-style: none;
    }

    ul li:not(:first-child){
        margin-left:20px;
    }

    button {
        background-color: #bee5bf;
        padding: 5px 20px;
        border:none;
        cursor:pointer;
    }
`;


export const Header = () => {
  return (
   <StyledHeader>
        <div className="logo-container">
            <img src={logo} alt='logo'>
            </img>
        </div>
        <nav className='menu-container'>
            <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
            </ul>
            <button>Login</button>
        </nav>
   </StyledHeader>
  )
}
