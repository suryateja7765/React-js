import { Component } from "react";



class Circle extends Component{
    
    render(){
        return(
            <>
            {
                [true,false,true].map(element=><Circelpresent isHighlight={element}/>)
            }

</>
            
        )
    }
}
export default Circle

class Circelpresent extends Component{
    render(){
        console.log(this.props.isHighlight);
        return(
            <div style={{width:100,height:100,border:"1px solid black",borderRadius:"50%",backgroundColor:this.props.isHighlight?"black":null}}>




            </div>
            )
    }
    
}