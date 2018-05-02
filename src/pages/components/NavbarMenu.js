import React from 'react'
import CrossMenu from './CrossMenu'

export default class NavbarMenu extends React.Component{   
 
    render(){
        return(
            <div 
                className="polygon_nav main_nav">
                <nav>
                    <ul>
                        <li className='navbar_item_l'><CrossMenu handleClack={this.props.handleClack}/></li>
                        <li className='navbar_item_r'><img className="logo" src="http://res.cloudinary.com/dssldws2k/image/upload/v1524332907/CRiF/crif_logo_web_development.png" alt="crif development logo" /></li>                
                    </ul>
                </nav>
                    <h1 className="nav_title">CRiF</h1>
                    <h3 className="nav_subtitle"> WEB DEVELOPMENT </h3>
                <nav className="menu_nav">
                <ul>
                    <li className='poly_item_l'>ABOUT US</li>
                    <li className='poly_item_c'>PROJECTS</li>
                    <li className='poly_item_r'>CONTACT</li>
                </ul>
                </nav>
            </div>
        )
    }
}