import React, { Component } from 'react'
import { navigate } from "gatsby"
import styles from '../buttons/menuButton.module.css'

export default class MenuButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Seems to tigger MouseOut on initialization
            isFocused: true,
        }
    }

    toggleFocus = () => {
        this.setState(state => ({ isFocused: !state.isFocused}));
        // console.log(this.state.isFocused);
    }

    render() {
        let text_color = this.state.isFocused ? "black" : "rgba(231, 90, 124, 1)";

        return (
            <div className={styles.container} onClick={() => navigate(this.props.newPage)} onMouseOver={this.toggleFocus} onMouseOut={this.toggleFocus}>
                <span className={styles.textContainer} style={{color: text_color}}>
                    {this.props.text}
                </span>
            </div>
        )
    }
}
