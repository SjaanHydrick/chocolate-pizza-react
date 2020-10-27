import React, { Component } from 'react'
import './App.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer" style={{ backgroundImage: this.props.background }} ></div>
                <img className="van" src="../assets/van-pic.png" alt="van" />
                <h4>Vanessa Stevenson</h4>
                <p className="footer-text">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.<button>Share Recipe</button></p>
                <br />
                <br />
                <img className="foot-logo" src="../assets/logo.png" alt="foot" />
                <div className="gray">
                    <p>Delicious &copy; 2013  All Rights Reserved</p>
                    <p>Proudly published with Ghost.</p>
                </div>

            </div>
        )
    }
}
