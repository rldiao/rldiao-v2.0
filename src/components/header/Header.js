import React, { Component } from 'react'
import Toolbar from "../navbar/Toolbar"
import SideDrawer from '../navbar/SideDrawer'
import Backdrop from '../backdrop/Backdrop';


export default class header extends Component {
  state = {
    sideDrawerOpen: false
  };

  // This is due to react grouping state changes
  drawerToggleClickHander = () => {
    // console.log("Toggle Click Handler");    
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop drawerClickHandler={this.drawerToggleClickHander}/>
    }
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHander}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    )
  }
}
