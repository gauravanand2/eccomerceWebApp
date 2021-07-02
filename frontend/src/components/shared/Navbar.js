import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
return(
    <section id="header">
        <div className="theme-background navbar">
            <div className="container nav">
                <div className="brand">
                    <NavLink to="/"><span className="head" >Brand Name</span></NavLink> 
                </div>
                <div className="nav-item">
                    <ul>
                        <li className="head"><NavLink to=""> Male </NavLink></li>
                        <li className="head"> <NavLink to=""> Female </NavLink></li>
                        <li className="head"> <NavLink to=""> Computer </NavLink></li>
                        <li className="head"><NavLink to=""> Mobile </NavLink></li>
                        <li className="head"><NavLink to=""> Furnitures </NavLink></li>
                        <li className="head"><NavLink to=""> Decoration</NavLink></li>
                        <li className="head"><NavLink to=""> Games </NavLink></li>
                        <li className="head"><NavLink to=""> Kitchen </NavLink></li>
                        <li className="head"> <NavLink to=""> Electronics </NavLink></li>

                    </ul>
                    
                   
                   
                    
                    
                    
                    
                    
                   
                </div>
                <div className="nav-profile">
                      <div className="nav-item">
                      <ul>
                            <li><NavLink className="fas fa-user" to="/"></NavLink></li>
                        </ul>
                      </div>
                    </div>
            </div>
        </div>
    </section>
)
}

export default Navbar;
