import React from "react";

class Navbar extends React.Component{
    state={
        count : 0 //initial state  
    }
    increment = () =>{
       this.setState({
        count : this.state.count +1 //modified state
       })
    }
   decrement = () =>{
        this.setState({
        count : this.state.count -1 //modifies state
       })
   }
render(){
 
    return(
        <div>
          {this.state.count} 
          <button onClick={this.increment}> + </button> 
          <button onClick={this.decrement}> - </button>
        </div>
    )
}
}
export default Navbar;