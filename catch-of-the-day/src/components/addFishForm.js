import React, { Component } from "react";

export default class AddFishForm extends Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (event) => {
        event.preventDefault()
        const fish = {
    name: this.nameRef.current.value,
    price: parseFloat(this.priceRef.current.value), 
    status: this.statusRef.current.value,
    desc: this.descRef.current.value,
    image: this.imageRef.current.value

        }
        this.props.addFish(fish)
        event.currentTarget.reset()

    }
  render() {
    return (
      <form className = "fish-edit" onSubmit ={this.createFish}>
         <input name="name" ref ={this.nameRef} type="text"></input>
         <input name="price" ref ={this.priceRef} type="text"></input>
         <select name="status" ref ={this.statusRef}>
             <option value = "available">Fresh!</option>
             <option value ="unavailable">Sold Out</option>
         </select>
         <textarea name="desc" ref={this.descRef}  />
         <input name="image" ref ={this.imageRef}  type="text"></input>
         <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
