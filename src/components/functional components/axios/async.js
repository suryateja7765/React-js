import React, { useState } from "react";
import axios from "axios";

const ProductApiA = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data); // Update products state with fetched data
            console.log(setProducts);
        } 
        catch (error) {
            console.log(error);
        }
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

export default ProductApiA;
