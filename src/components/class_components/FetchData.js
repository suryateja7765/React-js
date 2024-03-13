import axios from "axios";
import { Component } from "react";

class FetchData extends Component{
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
   FetchApi=async()=>{
    let result =await axios.get("https://dummyjson.com/carts");
    console.log(result.data.carts);
    this.setState({products:result.data.carts})
   }
    

   render(){
    return(
        <>
        <button onClick={this.FetchApi}>Click</button>
        
        <table>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>image</th>
            </tr>
           {
            this.state.products.map((eachObject)=>{
                const {id,title,description,price,image}=eachObject
                return(
                    <tr >
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{image}</td>
                    </tr>
                )

            })
           }
        </table>
        </>
    )
   }
}
export default FetchData;