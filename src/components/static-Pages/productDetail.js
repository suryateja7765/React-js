// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";
// import { useParams } from "react-router-dom"

// const ProductDetail=()=>{

//     const routeInfo=useParams()
//     console.log(routeInfo,"routeInfo");

//     const [product,setProduct]=useState({})

//     useEffect(()=>{
//         fetchData()
//     },[routeInfo.id])

//     const fetchData=()=>{
//         axios.get(`https://fakestoreapi.com/products/${routeInfo.id}`)
//         .then(response=>{
//             if(response.status===200){
//                 setProduct(response.data)
//             }
//         })
//     }

//     return(
//         <>
//         <h1>i am product details</h1>
//         {
//             Object.keys(product).length>0
//             ?
//             <>
//             <h1>{product.title}</h1>
//             <h3>{product.description}</h3>
//             <img src={product.image} style={{width:200}} height={200} ></img>
//             <h4 style={{color:"red"}}>${product.price}</h4>
//             </>
//             :
//             <Spinner></Spinner>
//         }
//         </>
//     )
// }

// export default ProductDetail

// -------------------

//     import axios from "axios";
//     import { useEffect, useState } from "react";
//     import { Spinner, Container, Row, Col, Card } from "react-bootstrap";
//     import { useParams } from "react-router-dom";

//     const ProductDetail = () => {
//         const routeInfo = useParams();
//         const [product, setProduct] = useState({});
//         const [loading, setLoading] = useState(true);

//         useEffect(() => {
//             fetchData();
//         }, [routeInfo.id]);

//         const fetchData = () => {
//             axios.get(`https://fakestoreapi.com/products/${routeInfo.id}`)
//                 .then(response => {
//                     if (response.status === 200) {
//                         setProduct(response.data);
//                         setLoading(false);
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Error fetching product data:", error);
//                     setLoading(false);
//                 });
//         };

//         return (
//             <Container className="mt-5">
//                 <h1 className="mb-4">Product Details</h1>
//                 {loading ? (
//                     <Spinner animation="border" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </Spinner>
//                 ) : (
//                     <Row>
//                         <Col md={6}>
//                             <Card>
//                                 <Card.Img variant="top" src={product.image} style={{ height: 'auto', maxWidth: '100%' }} />
//                             </Card>
//                         </Col>
//                         <Col md={6}>
//                             <Card>
//                                 <Card.Body>
//                                     <Card.Title>{product.title}</Card.Title>
//                                     <Card.Text>{product.description}</Card.Text>
//                                     <Card.Text style={{ color: "red" }}>${product.price}</Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 )}
//             </Container>
//         );
//     };

//     export default ProductDetail;
// --------------------


import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const routeInfo = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [routeInfo.id]);

    const fetchData = () => {
        axios.get(`https://fakestoreapi.com/products/${routeInfo.id}`)
            .then(response => {
                if (response.status === 200) {
                    setProduct(response.data);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4" style={{ color: "#333" }}>Product Details</h1>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src={product.image} style={{ height: 'auto', maxWidth: '100%' }} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title style={{ color: "#333" }}>{product.title}</Card.Title>
                                <Card.Text style={{ color: "#555" }}>{product.description}</Card.Text>
                                <Card.Text style={{ color: "red", fontSize: "1.2rem", fontWeight: "bold" }}>${product.price}</Card.Text>
                                <Button variant="primary" className="mr-2">Add to Cart</Button>
                                <Button variant="secondary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default ProductDetail;
