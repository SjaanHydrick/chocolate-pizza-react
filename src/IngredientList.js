import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'

export default class IngredientList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <IngredientItem amount="1 1/2 cups" name="milk" />
                    <IngredientItem amount="1 1/2 cups" name="heavy cream" />
                    <IngredientItem amount="1/2 cups" name="mascarpone" />
                    <IngredientItem amount="1/3 cups" name="granulated sugar" />
                    <IngredientItem amount="1/2 tsp" name="pink salt" />
                    <IngredientItem amount="2" name="egg yolks" />
                    <IngredientItem amount="1 lb" name="Black Mission Figs" />
                    <IngredientItem amount="1" name="lemon, juiced" />
                    <IngredientItem amount="1/2 cup" name="brown sugar" />
                    <IngredientItem amount="2 tbsp" name="butter" />
                    <IngredientItem amount="2-4 tbsp" name="water" />
                    <IngredientItem amount="1 cup" name="honey roasted pecan, roughly chopped" />
                </ul>
            </div>
        )
    }
}
