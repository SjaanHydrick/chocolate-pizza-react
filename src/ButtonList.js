import React, { Component } from 'react'
import facebook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import google from './assets/gp-icon.png';
import instagram from './assets/insta-icon.png';
import flicker from './assets/flic-icon.png';
import pinterest from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';
import './App.css';

export default class ButtonList extends Component {
    render() {
        return (
            <div className="button-list">
                <img className="tiny-buttons" src={facebook} alt="facebook"/>
                <img className="tiny-buttons" src={twitter} alt="twitter"/>
                <img className="tiny-buttons" src={google} alt="google-plus"/>
                <img className="tiny-buttons" src={instagram} alt="instagram"/>
                <img className="tiny-buttons" src={flicker} alt="flicker"/>
                <img className="tiny-buttons" src={pinterest} alt="pinterest"/>
                <img className="tiny-buttons" src={rss} alt="rss"/>
                <img className="tiny-buttons" src={mail} alt="mail"/>
            </div>
        )
    }
}
