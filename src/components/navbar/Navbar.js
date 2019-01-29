import React, { Component } from 'react'
import styles from '../layout.module.css'
import MenuButton from '../buttons/MenuButton'

import { Button } from 'reactstrap';

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
                    <Button color="white" style={{height: "100px", width: "100px", color: "white", margin: "10px"}}>
                        <i className="fas fa-bars" style={{fontSize: "30px", color: "black"}}></i>
                    </Button>
                </div>
                <div className={styles.navBar}>
                    <MenuButton text="Robert Diao" newPage="/"></MenuButton>
                    <MenuButton text="Software" newPage="/comingSoon"></MenuButton>
                    <MenuButton text="Contact" newPage="/comingSoon"></MenuButton>
                </div>
            </div>
        )
    }
}
