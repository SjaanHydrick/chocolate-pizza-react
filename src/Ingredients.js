import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList.js'

export default class Ingredients extends Component {
    render() {
        return (
            <div className="ingredients">
                <IngredientList />
            </div>
        )
    }
}
