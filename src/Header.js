import React, { Component } from 'react'
import logo from './assets/logo.png';
import facebook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import google from './assets/gp-icon.png';
import instagram from './assets/insta-icon.png';
import flicker from './assets/flic-icon.png';
import pinterest from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo" />
                <h1>Delicious</h1>
                <p>The Best Food Blog On The Web.</p>
                <span>
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={google} alt="google-plus"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={flicker} alt="flicker"/>
                    <img src={pinterest} alt="pinterest"/>
                    <img src={rss} alt="rss"/>
                    <img src={mail} alt="mail"/>
                </span>
            </div>
        )
    }
}

