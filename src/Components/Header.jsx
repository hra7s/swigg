
import { useState,useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = ()=>{
    const [status,setStatus]= useState("Login")

    console.log("inside Header")

 
    useEffect(()=>{
console.log("inside Effect")
    },[status])

    console.log("Outside Effect")

    return (
        <div className="header">
            <div className='logo'>
                <img  className="logo" alt="logo-image" src={LOGO_URL} />
            </div>
            <div className='navItems'>
                        <ul>
                        <a href='/'> <li>Home</li></a>
                            
                           <Link to="/about"><li>About Us</li></Link> 
                            <Link to='/contact'><li>Contact Us</li></Link>
                           <Link to="/grocery"><li>Grocery</li></Link> 
                            <button onClick={()=> (status==="Login"?setStatus("Logout"):setStatus("Login"))} className='btn'>{status}</button>
                        </ul>
            </div>
        </div>
    )
}
export default Header





