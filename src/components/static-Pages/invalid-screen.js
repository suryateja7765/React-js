import { useNavigate } from "react-router-dom"


const InvalidScreen=()=>{
const navigate=useNavigate()
    const handleBack=()=>{
        navigate("/")
    }
    return(
        <>
        <h2>

        404 error
        <button onClick={handleBack}>back to home</button>
        </h2>
        </>
    )
}

export default InvalidScreen