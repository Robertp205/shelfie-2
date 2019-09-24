import React, { Component } from 'react'
import './Product.css'
// import axios from 'axios'
// import App from '../../App'
import Dashboard from '../Dashboard/Dashboard'


export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory: [],
            name: '',
            price:0,
            imgurl:''
        }
    }

    // async componentDidMount() {

    //     const inventory = await axios.get('/api/inventory')
    
    //     this.setState({
    
    //       inventory: inventory.data
    
    //     })
    //     .catch(err =>{

    //         console.log(err)

    //     })
    //     console.log(inventory);
        
    //   }


    render() {
        const mappedinv = this.state.inventory.map((inventory, i)=> {
                return (
                    <Dashboard key={i} inventory={inventory} />
                )
                
            })
            console.log(mappedinv);

        return (

            <div className='box-holder'>
                {mappedinv}
            <div className='product-box'>

                <div className='picture-box'>
                    
                </div>

                <div className='text-product'>
                    <p>shoes</p>
                    <p>price</p>
                </div>
                
            </div>

            </div>
        )
    }
}