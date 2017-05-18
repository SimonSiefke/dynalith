import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';




class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    let items;

    switch (this.props.menus[this.state.currentMenu].items) {
      case 1:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
        ];
        break;
      case 2:
        items = [
          <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>,
          <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
        ];
        break;
      default:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
        ];
    }

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    const jsx = (
        <MenuWrap wait={20}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
            {items}
          </Menu>
        </MenuWrap>
      );
    

    return jsx;
  }

  render() {
    const buttons = Object.keys(this.props.menus).map((menu) => {
      return (
        <a key={menu}
          className={classNames({'current-demo': menu === this.state.currentMenu})}
          onClick={this.changeMenu.bind(this, menu)}>
          {this.props.menus[menu].buttonText}
        </a>
      );
    });

    return (
      <div id="outer-container" >
        {this.getMenu()}
        <main id="page-wrap">
          <nav className="demo-buttons">
            {buttons}
          </nav>
        </main>
        <style jsx global>{`


html {
  height: 100%;
}
#outer-container{
  height:100vw;
}

body {
  height: 100%;
  background: #444;
  color: #fffce1;
  font-family: 'Raleway', Arial, sans-serif;
}

#app {
  height: 100%;
}


main {
  height: 100%;
  padding: 3em 2em;
  text-align: center;
  background: #b4bad2;
  overflow: scroll;
}






//
// Burger menu custom styles
//
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}



.bm-burger-bars {
  background: #373a47;
}


.bm-menu {
  background: #373a47;
}
  a {
    color: #b8b7ad;
}
a:hover,
a:focus {
  color: #c94e50;
}

.bm-item-list a {
  padding: 0.8em;
}
  span {
    margin-left: 10px;
    font-weight: 700;
  }


//
// Mixins
//
  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }


#slide {
  .menu-1;
}


          `}
        </style>
      </div>
    );
  }
}



export default Demo