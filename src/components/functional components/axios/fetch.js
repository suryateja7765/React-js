import React, { useState } from "react";
import axios from "axios";

const ProductApiF = () => {
    const [products, setProducts] = useState([]);

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data); // Update products state with fetched data
            })
            .catch(err => {
                console.log(err);
            });
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

export default ProductApiF;
