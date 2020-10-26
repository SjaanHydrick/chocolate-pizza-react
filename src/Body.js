import React, { Component } from 'react'
import print from './assets/print-icon.png';
import chocopizza from './assets/choco-pizza.png';
import './App.css';

export default class Body extends Component {
    render() {
        return (
            <div>
                <h3>Chocolate Pizza</h3>
                <h6>Posted on 15 DEC 2013 / Desserts</h6>
                <span className="print"><img src={print} alt="print" />PRINT</span>
                <img className="choco-pizza" src={chocopizza} alt="choco-pizza" />
                <p className="body-p">For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                <p className="body-p">Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                <p className="body-p">Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
            </div>
        )
    }
}






