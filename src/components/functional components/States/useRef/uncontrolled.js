
import { useRef } from "react";

const Uncontrolled = () => {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        if (userName.length > 5 ) {
            alert("Enter username less than 5 characters");
        } else if (password.length > 5 ) {
            alert("Enter password less than 5 characters");
        } 
        else {
            console.log("Username:" + userName);
            console.log("Password:" + password);
        }
    };
    

    return (
        <>
            <h1>Form validations</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" ref={userNameRef} />
                <input type="password" name="password" ref={passwordRef} />
                <input type="submit"/>
            </form>
        </>
    );
};

export default Uncontrolled;
