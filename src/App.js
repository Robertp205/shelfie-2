import React, { Component } from 'react'
import axios from 'axios'
import mainRouter from './Routes/main.router'

export default class App extends Component {
    constructor(){
        super()

        this.state = {
            inventory: []
        }
    }

    componentDidMount =()=>{
        axios.get('/api/inventory')
            .then(res =>{
              console.log('yeet');
              
                this.setState({
                    inventory: res.data
                })
            })
        
        axios.post('api/inventory').then(res=>{
          console.log('no');
          
          this.setState({
            name: res.data,
            price: res.data,
            img: res.data
          })
        })
        axios.put('/api/inventory/:id').then(res=>{
          console.log('o2');
          
          this.setState({
            id: res.data,
            name: res.data,
            price: res.data,
            img: res.data
          })
        })
    
        
      }

    render() {
        return (
            <div>
               
                {mainRouter}
            </div>
        )
    }
}
