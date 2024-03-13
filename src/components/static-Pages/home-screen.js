// import { useEffect, useState } from "react"
// import Header from "../functional components/navbar/navbarActive"
// import axios from "axios"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";
// import { Spinner } from "react-bootstrap";
// const HomeScreen=()=>{
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then(response=>
//             {
//                 if(response.status===200){
//                     setData(response.data)
//                 }
//             })
//         .catch(err=>console.log(err))
//     },[])
//     return(
//         <>
//         <h2>
//            <Header/>
//            {/* i am home screen */}
//            {
//             data.length>0
//             ?
//             data.map((eachObject)=>{
//                 return(
//                     <>
//                     <CardsShow  data={eachObject}/>
                    
//                     </>
//                 )
//             })
//             :
//             <Spinner></Spinner>
//            }
//         </h2>
//         </>
//     )
// }

// export default HomeScreen

// function CardsShow(props) {
//     const{data:{image,description,title,category,id}}=props
//     // const handleClick=()=>{
        
//     // }
//   return (
//     <Card style={{ width: '18rem', display: "flex", flexDirection: "column", height: 600, width: 500, border: "1px solid red" }}>
//       <Card.Img variant="top" src={image} style={{width:100}} height={100 }/>
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//         {description}
//         </Card.Text>
//         <button>
//             <Link to={`/${category}/${id}`}>Navigate</Link>
//         </button>
//       </Card.Body>
//     </Card>
//   );
// }

// ---------------------------


// import { useEffect, useState } from "react";
// import Header from "../functional components/navbar/navbarActive";
// import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

// const HomeScreen = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//             .then(response => {
//                 if (response.status === 200) {
//                     setData(response.data);
//                 }
//             })
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <>
//             <Header />
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
//                 {data.length > 0 ? (
//                     data.map((eachObject, index) => (
//                         <CardsShow key={index} data={eachObject} />
//                     ))
//                 ) : (
//                     <Spinner animation="border" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </Spinner>
//                 )}
//             </div>
//         </>
//     );
// };

// function CardsShow({ data }) {
//     const { image, description, title, category, id } = data;

//     return (
//         <Card style={{ width: '18rem', margin: '1rem', border: "1px solid #ccc", borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//             <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//             <Card.Body>
//                 <Card.Title>{title}</Card.Title>
//                 <Card.Text>{description}</Card.Text>
//                 <Button variant="primary">
//                     <Link to={`/${category}/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Navigate</Link>
//                 </Button>
//             </Card.Body>
//         </Card>
//     );
// }

// export default HomeScreen;


// -----------------

// import { useEffect, useState } from "react";
// import Header from "../functional components/navbar/navbarActive";
// import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

// const HomeScreen = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//             .then(response => {
//                 if (response.status === 200) {
//                     setData(response.data);
//                 }
//             })
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <>
//             <Header />
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
//                 {data.length > 0 ? (
//                     data.map((eachObject, index) => (
//                         <CardsShow key={index} data={eachObject} />
//                     ))
//                 ) : (
//                     <Spinner animation="border" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </Spinner>
//                 )}
//             </div>
//         </>
//     );
// };

// function CardsShow({ data }) {
//     const { image, description, title, category, id } = data;

//     return (
//         <Card style={{ width: '18rem', margin: '1rem', border: "1px solid #ccc", borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: "transform 0.3s ease-in-out" }}>
//             <Link to={`/${category}/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                 <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//                 <Card.Body>
//                     <Card.Title>{title}</Card.Title>
//                     <Card.Text>{description}</Card.Text>
//                     <Button variant="primary">View Details</Button>
//                 </Card.Body>
//             </Link>
//         </Card>
//     );
// }

// export default HomeScreen;


// ------------------

import { useEffect, useState } from "react";
import Header from "../functional components/navbar/navbarActive";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const HomeScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ background: "#f4f4f4", minHeight: "100vh", padding: "2rem" }}>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {data.length > 0 ? (
                    data.map((eachObject, index) => (
                        <CardsShow key={index} data={eachObject} />
                    ))
                ) : (
                    <Spinner animation="border" >
                        <span>Loading...</span>
                    </Spinner>
                    
                )}
            </div>
        </div>
    );
};

function CardsShow({ data }) {
    const { image, description, title, category, id } = data;

    return (
        <Card style={{ width: '18rem', margin: '1rem', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: "transform 0.3s ease-in-out" }}>
            <Link to={`/${category}/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <Card.Body style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '10px' }}>
                    <Card.Title style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</Card.Title>
                    <Card.Text style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#555' }}>{description}</Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default HomeScreen;
