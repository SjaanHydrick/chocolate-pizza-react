import React, { Component } from 'react';
import './App.css';

export default class Ingredients extends Component {
    render() {
        return (
            <div className="ingredients">
                <ul>
                    <li><input className="checkbox" type="checkbox" /> 1 1/2 cups milk</li>
                    <li><input className="checkbox" type="checkbox" />1 1/2 cups heavy cream</li>
                    <li><input className="checkbox" type="checkbox" /> 1/2 cup mascarpone</li>
                    <li className="strikethru"><input type="checkbox" checked />1/3 granulated sugar</li>
                    <li><input type="checkbox" /> 1/2 tsp pink salt</li>
                    <li className="strikethru"><input type="checkbox" checked />2 egg yolks</li>
                    <li><input type="checkbox" />1 lb Black Mission Figs</li>
                    <li><input type="checkbox" />1 lemon, juiced</li>
                    <li><input type="checkbox" />1/2 cup brown sugar</li>
                    <li><input type="checkbox" />2 tbsp butter</li>
                    <li><input type="checkbox" />2-4 tbsp water</li>
                    <li><input type="checkbox" />1 cup honey roasted pecan, roughly chopped</li>
                </ul>
            </div>
        )
    }
}
