function Practice(){
    const PracticeObj={
        name:"suryateja",
        adress:"razole",
        url:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        dimensions:150
    }
    const ImageArray=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"]
    const {name,adress,url,dimensions}=PracticeObj
return(
    
    <div>

    {
        ImageArray.map((eachitem)=>{
            return(
                <div>
                   <h1>{name}</h1>
                    <img src={eachitem} alt="gbhn"height= 
                    {dimensions} width={dimensions}/>
                </div>
            )
        })
    }
   
    </div>
    
)
}
export default Practice