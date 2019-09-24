import React, { Component } from 'react'
import Product from '../Product/Product'
// import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory: [],

        }
    }

    async componentDidMount() {

        const inventory = await axios.get('/api/inventory')
    
        this.setState({
    
          inventory: inventory.data
    
        })
        console.log(inventory);
        
      }


    render() {
        const mappedInv= this.state.inventory.map((inventory, i)=>{

            return(

                <div key={i} inventory={inventory} updateInventory={this.updateInventory} deleteInventory={this.handleDeleteInventory} />

            )

        })
        // const mappedinv = this.state.inventory.map(element => {
        //     return (
        //         <div key={element.id}>
        //             <Link to={`inventory/${element.id}`}>
        //                 <h1>{element.name}</h1>
        //                 <h1>{element.price}</h1>
        //                 <h1>{element.img}</h1>
                
                
        //             </Link>
        //         </div>
        //     )
        // })
        // console.log(mappedinv);
        // const mappedinv = this.state.inventory.map((inventory, i)=> {
        //     return (
        //         <App key={i} inventory={inventory} />
        //     )
        // })
        return (
            <div>
                
                <Product/>
                {mappedInv}
            </div>
        )
    }
}
