import React from 'react'
import CrossMenu from './CrossMenu'

export default class NavbarMenu extends React.Component{   
    selectPage = e =>{
        debugger
		this.props.changePage(e.target.id)	
	}
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
                    <li id="AboutUs"
                        className='poly_item_l'
                        onClick={this.selectPage.bind(this)}>ABOUT US</li>
                    <li id="Projects"
                        className='poly_item_c'
                        onClick={this.selectPage.bind(this)}>PROJECTS</li>
                    <li id="Contact"
                        className='poly_item_r'
                        onClick={this.selectPage.bind(this)}>CONTACT</li>
                </ul>
                </nav>
            </div>
        )
    }
}