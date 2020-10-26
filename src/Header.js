import React, { Component } from 'react'
import logo from './assets/logo.png';
import ButtonList from './ButtonList.js'

import './App.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logo} alt="logo" />
                <h1>Delicious</h1>
                <p className ="subheader">The Best Food Blog On The Web.</p>
                <ButtonList />
                <div className="border" style={{ background: this.props.background }} ></div>
            </div>
        )
    }
}

