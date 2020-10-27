import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <input className="checkbox" type="checkbox" />
                    {this.props.amount} {this.props.name}

                </li>


            </div>
        )
    }
}
