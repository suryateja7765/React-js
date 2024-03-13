


// -------------------
// fetch method-----------
// import React, { useState } from "react";
// import axios from "axios";

// const ProductApi = () => {
//     const [products, setProducts] = useState([]);
    
//     const fetchData = () => {
//         axios.get("https://fakestoreapi.com/products")
//             .then(res => {
//                 setProducts(res.data); 
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };
    
//     return (
//         <>
//             <h1>Products</h1>
//             <button onClick={fetchData}>Fetch Data</button>
           
//             {products.map((product) => {
//                 const { title, id, description, image, price } = product;
//                 return (
//                     <div key={id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//                         <h3>{title}</h3>
//                         <p>{description}</p>
//                         <p>Price: ${price}</p>
//                         <img src={image} alt={title} style={{ maxWidth: "200px" }} />
//                     </div>
//                 );
//             })}
//         </>
//     );
// }

// export default ProductApi;



// =------------------

// async and await----------------------
import React, { useState } from "react";
import axios from "axios";

const ProductApi = () => {
    const [products, setProducts] = useState([]);
    
    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
    };
    
    return (
        <>
            <h1>Products</h1>
            <button onClick={fetchData}>Fetch Data</button>
           
            {products.map((product) => {
                const { title, id, description, image, price } = product;
                return (
                    <div key={id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        <img src={image} alt={title} style={{ maxWidth: "200px" }} />
                    </div>
                );
            })}
        </>
    );
}

export default ProductApi;


//-------------------------
 //  async () => {
    //     try {
    //         const response = await axios.get("https://fakestoreapi.com/products");
    //         setProducts(response.data); // Update state with fetched products
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }
// }



// const fetchData=async()=>{
//     // hit using async axios-------
// var result=await axios.get("https://fakestoreapi.com/products")
// console.log(result);

// hit the server using fetch---
    //     axios.get("https://fakestoreapi.com/products").then(res=>console.log(res)).catch(err=>console.log(err))
    // // }


// // hit using fetch-------
//     // fetch("https://fakestoreapi.com/products").then(res=>res.JSON()).then(res=>console.log(res)).catch(err=>console.log(err))


// // hit using async fetch-----------------------------------------
// //  let result=await fetch("https://fakestoreapi.com/products")
// //  let resulttt= await result.json()
// //  console.log(resulttt);



