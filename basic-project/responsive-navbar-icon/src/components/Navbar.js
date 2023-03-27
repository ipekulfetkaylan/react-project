import React, { useState } from 'react'
import { MenuData } from "./MenuData";
import "./Navbar.css";

function Navbar (){
   const [clicked, setClicked]=useState(false);
   const  handleClick = () => {
        setClicked(!clicked);
    }

 return (
    <>
        <nav className="navbarItems">
            <h1 className="logo">React<i class="fa-brands fa-react"></i></h1>
            <div className="menu-icons" onClick={handleClick}>
            <i className={!clicked ? "fa-solid  fa-xmark" :"fa-solid fa-bars"}></i>
            </div>
            <ul className={!clicked ? "nav-menu active" : "nav-menu"} >
                {
                    MenuData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <a href={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </>
 )
}

export default Navbar;


