import React from 'react';
import Home from './pages/Home.js'
import Navbar from './pages/components/Navbar.js'
import AboutUs from './pages/AboutUs.js'
import NavbarMenu from './pages/components/NavbarMenu.js'

import './App.css';
class App extends React.Component {
constructor(){
    super()
    this.state = {
      display:'none',
      active: false
    }
    this.handleClick= this.handleClick.bind(this)
    this.handleClack= this.handleClack.bind(this)

}
handleClick(){
  this.setState({display:"block",active:true})

}
handleClack(){
  this.setState({display:"none",active:false})
}
  render() {
    let style = {display: this.state.display}
    let active = {active: this.state.active}
    const activeClass= this.state.active ? "active" : ""
    return (
      <div>
        <div className="home">
          <nav 
            style= {active}
            className="main_nav">
            <Navbar handleClick = {this.handleClick}/>
          </nav>
          <div 
          className="navbar_white"
          className={`navbar_white ${activeClass}`}
            style= {style}>
           <NavbarMenu handleClack={this.handleClack}/>
          </div>
            <Home />
        </div>
          <AboutUs />
      </div>
    );
  }
}
export default App; //Export your component`}
