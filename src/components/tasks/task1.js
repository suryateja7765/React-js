import React, { Component } from 'react';
import Display from './display';

export default class PracticeYt extends Component {
    state = {
        name: "skillhub",
        products: []
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({ products: data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Display ></Display>
                
                    <ul>
                        {this.state.products.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                    <br/>
                    <button onClick={() => this.setState({ name: "surya teja" })}>change name</button>
            
            </div>
        );
    }
}
