import React from 'react'
import BurgerMenu from './BurgerMenu'

export default class Navbar extends React.Component{
    
    render(){
        return(
            <div>
                <nav className="main_nav">
                    <ul>
                        <li className='navbar_item_l'><BurgerMenu handleClick = {this.props.handleClick}/></li>
                        <li className='navbar_item_r'><img className="logo" src="http://res.cloudinary.com/dssldws2k/image/upload/v1524332907/CRiF/crif_logo_web_development.png" alt="crif development logo" /></li>                
                    </ul>
                 </nav>
            </div>
        )
    }
}