import React, { Component } from 'react'
import './App.css';

export default class ButtonList extends Component {
    render() {
        return (
            <div className="button-list">
                <img className="tiny-buttons" src="../assets/fb-icon.png" alt="facebook" />
                <img className="tiny-buttons" src="../assets/twit-icon.png" alt="twitter" />
                <img className="tiny-buttons" src="../assets/gp-icon.png" alt="google-plus" />
                <img className="tiny-buttons" src="../assets/insta-icon.png" alt="instagram" />
                <img className="tiny-buttons" src="../assets/flic-icon.png" alt="flicker" />
                <img className="tiny-buttons" src="../assets/pint-icon.png" alt="pinterest" />
                <img className="tiny-buttons" src="../assets/rss-icon.png" alt="rss" />
                <img className="tiny-buttons" src="../assets/mail-icon.png" alt="mail" />
            </div>
        )
    }
}
