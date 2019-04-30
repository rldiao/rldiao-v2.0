import React, { Component } from "react";
import styles from "../layout.module.css";
import MenuButton from "../buttons/MenuButton";

import { Button } from "reactstrap";

// Not currently used - REDUNDENT

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <div className={styles.toggle}>
          <Button
            color="white"
            style={{
              height: "100px",
              width: "100px",
              color: "white",
              margin: "10px"
            }}
          >
            <i
              className="fas fa-bars"
              style={{ fontSize: "30px", color: "black" }}
            />
          </Button>
        </div>
        <div className={styles.navBar}>
          <MenuButton text="Robert Diao" newPage="/" />
          <MenuButton text="Software" newPage="/comingSoon" />
          <MenuButton text="Contact" newPage="/comingSoon" />
        </div>
      </div>
    );
  }
}
