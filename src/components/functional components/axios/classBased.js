import React, { Component } from "react"; // Import React
import axios from "axios";

class ProductApiCB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    fetchData = async () => {
        try {
            const response = await axios.get
            ("https://fakestoreapi.com/products")
            // ("https://jsonplaceholder.typicode.com/posts");
            this.setState({ products: response.data });
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    render() {
        return (
            <>
                <h1>Products</h1>
                <button onClick={this.fetchData}>Fetch Data</button>
                {this.state.products.map((product) => {
                    const { title, id, description, image, price } = product;
                    return (
                        <div key={id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>Price: ${price}</p>
                            {/* <img src={image} alt={title} style={{ maxWidth: "200px" }} */}
                            
                            <img src="https://via.placeholder.com/200" alt={title} style={{ maxWidth: "200px" }} />

                             
                        </div>
                    );
                })}
            </>
        );
    }
}

export default ProductApiCB;
