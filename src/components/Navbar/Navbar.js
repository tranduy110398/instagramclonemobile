import React from 'react'
import "./NavBar.css";
import logo from "../../assets/images/logoinsta.png";
import home from "../../assets/images/home.svg";
import share from "../../assets/images/share.svg";
import { Grid } from '@material-ui/core';
const Navbar = () => {
    return (
        <div className="navbar-main">
        <Grid container>

            {/* ****** Empty Space ******  */}
            <Grid item xs={2}> 
                <img src={logo} className="navbar-logo" alt="Logo"/>
            </Grid>
            {/* ****** Empty Space ******  */}

            {/* ****** Main Navbar ******  */}
            <Grid item xs={3}>
            </Grid>    
            
            <Grid item xs={3}>
                   
            </Grid>
            <Grid item xs={4} className="navbar-icons">
               <img src={home} alt="Home Page" width="40px"/>
               <img src={share} alt="Share Button"  width="40px"/>   
            </Grid>
            {/* ****** Main Navbar ******  */}

        </Grid>
        </div>
    )
}

export default Navbar;
