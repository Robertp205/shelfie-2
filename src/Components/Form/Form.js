import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'
import '../Dashboard/Dashboard'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            inventory: [],
            name: '',
            price: 0,
            imgurl: '',
        }
    }

    componentDidMount=()=>{
        axios.get('/api/inventory')
        .then(res =>{
            this.setState({
                inventory: res.data
            })
        })
    }

    update_name = (name)=> {
        this.setState(({
            name: name
        }))
    }

    update_price = (price)=> {
        this.setState(({
            price: price
        }))
    }

    update_img = (imgurl)=> {
        this.setState(({
            imgurl: imgurl
        }))
    }

    resetState = ()=> {
        console.log('hit')
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({imgurl:''})
    }

    handleName=(name)=>{
        console.log(this.state.name);
        
        this.setState({

            name: name

        })

    }

    handlePrice=(val)=>{
        this.setState({
            price: val
        })
    }

    handleImgurl=(val)=>{
        this.setState({
            imgurl: val
        })
    }

    handleAddInventory = () => {
        console.log('o2')
        axios.post('/api/inventory',{ name: this.state.name, price: this.state.price, imgurl: this.state.imgurl}).then(res => {
            this.setState({inventory: res.data, name: res.data, price: res.data, imgurl: res.data})
        })

        this.setState({name: ""});
        this.setState({price: 0});
        this.setState({imgurl: ''});
        
        
    }

    updateInventory =(id, obj)=> {
        console.log('lol')
        axios.put(`/api/inventory/${id}`, obj).then(response => {
            this.setState({
                name: response.data,
                price: response.data,
                imgurl: response.data
            })
        })
        .catch(err =>{
            console.log(err)})  
    }

    




    render() {
        const mappedInv= this.state.inventory.map((inventory, i)=>{

            return(

                <div key={i} inventory={inventory} updateInventory={this.updateInventory} deleteInventory={this.handleDeleteInventory} />

            )

        })
        
        return (

            <div className="big-yeet">

            <div className="yeet-box">
                <input placeholder='Image URL' value={this.state.imgurl}  onChange={(e)=>this.handleImgurl(e.target.value)}></input>
                <input placeholder='Name' value={this.state.name} onChange={(e)=>this.handleName(e.target.value)}></input>
                <input placeholder='price' value={this.state.price} onChange={(e)=>this.handlePrice(e.target.value)}></input>
                <button onClick={()=>this.resetState()}>Cancel</button>
                <button onClick={()=> this.handleAddInventory()}>Add to Inventory</button>

                {mappedInv}
            </div>

            </div>
        )
    }
}

