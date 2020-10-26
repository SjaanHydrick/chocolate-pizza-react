import React, { Component } from 'react'
import van from './assets/van-pic.png'
import foot from './assets/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div>

                <img id="van" src={van} alt="van" />
                <h4>Vanessa Stevenson</h4>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.<button>Share Recipe</button></p>
                <br />
                <br />
                <img id="foot-logo" src={foot} alt="foot" />
                <div class="gray">
                    <p>Delicious &copy; 2013  All Rights Reserved</p>
                    <p>Proudly published with Ghost.</p>
                </div>

            </div>
        )
    }
}