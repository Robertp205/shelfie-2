import React, { Component } from 'react'
// import axios from 'axios'
import mainRouter from './Routes/main.router'
import Header from './Components/Header/Header'

export default class App extends Component {
    constructor(){
        super()

        this.state = {
            inventory: []
        }
    }

    

    render() {
        return (
            <div>
               <Header/>
                {mainRouter}
            </div>
        )
    }
}
