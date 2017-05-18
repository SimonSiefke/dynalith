import Menu from 'react-burger-menu/lib/menus/slide'
import React, {Component} from "react"

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    height:"100vh"
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height:"auto"
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
class Example extends Component {
  
  
  render () {
    return (
      <div>
      <Menu styles={styles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <hr />
        <a id="about" className="menu-item" href="/about">About</a>
        <hr />

        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <style jsx>
      {`
        div{
          z-index:24;
        }
      
        
        
  a {
    color: #b8b7ad;
    padding: 0.8em;
    text-decoration:none;
    font-size: 1.5rem;

}
    a:hover,
    a:focus {
      color: #c94e50;
    
  
}
hr{
  width:100%;
}

a {
}
  span {
    margin-left: 10px;
    font-weight: 700;
  
}
      
      
      
        
        `}
      </style>
      </div>
    );
  }
}

export default Example