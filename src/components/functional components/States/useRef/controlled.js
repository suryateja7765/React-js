
import { useState } from "react";

const Controlled = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, SetUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const userNameHandler = (event) => {
        const userNameInput = event.target.value;
        setUserName(userNameInput);
        if (userNameInput.length > 5) {
            showError();
        } else {
            SetUserNameError(null);
        }
    };

    const showError = () => {
        SetUserNameError("Username must be less than 6 characters");
    };

    const passwordHandler = (event) => {
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        if (passwordInput.length > 5) {
            showPassError();
        } else {
            setPasswordError(null);
        }
    };

    const showPassError = () => {
        setPasswordError("Password must be 5 characters");
    };

    //     localStorage.setItem("Data", JSON.stringify(formData));

    //     setUserName("");
    //     setPassword("");
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
            userName: userName,
            password: password
        };
    
        // const key = `Data_${Date.now()}`;
    
        localStorage.setItem("Data", JSON.stringify(formData));
    
        setUserName("");
        setPassword("");
    };
    

    return (
        <>
            <h2>Controlled component: </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={userName}
                        onChange={userNameHandler}
                        style={{ border: userNameError ? "2px solid red" : "none" }}
                    />
                    {userNameError && <div className="text-danger">{userNameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                        value={password}
                        onChange={passwordHandler}
                        style={{ border: passwordError ? "2px solid red" : "none" }}
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" />{" "}
                        Remember me
                    </label>
                </div>
                <button  type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Controlled;
