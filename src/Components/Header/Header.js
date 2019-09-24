import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'


const navStyles = {
    width: '100vw',
    height: '10vh',
    background: 'tomato',
    display: 'flex',
    // flexDirection: 'row-reverse',
    alignItems: 'center'
};

const linkStyle = {
    color: 'white',
    fontSize: '20px',
    marginLeft: '20px',
    textDecoration: 'none'
};



const Header = () => {
    return (
        

       <nav style={navStyles}>
           <NavLink style={linkStyle} exact to='/' activeClassName="active">
           <div className='meep'><span>Dashboard</span> </div>
           </NavLink >
           <NavLink style={linkStyle} to='add' activeClassName="active" >
           <span>Add to Inventory</span>
           
           </NavLink>
           
       </nav>

        
    )
}

export default Header

