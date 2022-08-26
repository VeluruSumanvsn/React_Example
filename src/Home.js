import React from "react";

class Home extends React.Component{
    state={
        data: ['']
    }
    componentDidMount(){
        fetch("http://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) =>{
            this.setState({data:json})
        })
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }

    //useEffect
render(){
    const {data} = this.state;
    return(
        <div className="row m-0">
            <h1>This is class based component</h1>
            {data.map((res) =>(
                <div className="col-md-3 card p-2">
                    <img className="w-100 h-75" src={res.image} alt={res.title}/>
                    <li>{res.price}</li>
                    <button className="w-25 btn btn-primary">Add</button>
               </div>
                
            ))}
        </div>
        
    )
}
}
export default Home