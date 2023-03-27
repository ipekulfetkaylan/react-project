import React, { useState } from 'react'
import { MenuData } from "./MenuData";
import {Link} from 'react-router-dom'
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
                                <Link to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
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


