import React, { Component } from 'react'
import Product from '../Product/Product'
import App from '../../App'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            inventory: [],
            name: '',
            price: 0,
            img: ''
            

        }
    }


    render() {
        const mappedinv = this.state.inventory.map((inventory, i)=> {
            return (
                <App key={i} inventory={inventory} />
            )
        })
        return (
            <div>
                Dashboard
                <Product/>
                {mappedinv}
            </div>
        )
    }
}
