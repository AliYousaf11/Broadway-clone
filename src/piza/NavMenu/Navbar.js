import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">MENU</Link></li>
        <li><Link to="/Location">LOCATION</Link></li>
        <li><Link to="/Franchies">FRANCHIES</Link></li>
        <li><Link to="/Contact">CONTACT</Link></li>
        <li><Link to="/Feedback">FEEDBACK</Link></li>
      </ul>  
        <button className='navbar_btn'>
          <span><ShoppingCartIcon className="shopping"/></span>
          <p>Cart: Rs 0.00</p> 
        </button>
    </div>
  )
}

export default Navbar