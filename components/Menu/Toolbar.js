import React from "react";
import './Toolbar.css';
import DrawerTongleButton from "../SideDrawer/DrawerTongleButton";

import logo from './images/logo.png';
import admin from './images/admin.png';

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
          <DrawerTongleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">
        <a href={{}}><img src={logo} /></a>
      </div>
      <div className="spacer">

      </div>
      <div className="toolbar_navigation-items">
        <img href={{}} src={admin} />&emsp;Admin Name
      </div>
    </nav>
  </header>
);

export default toolbar;
