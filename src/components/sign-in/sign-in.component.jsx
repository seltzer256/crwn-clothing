import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userCredentials;
        //this.props.onSubmit(email, password);
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    handleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={userCredentials.password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {" "}
                        Sign In With Google{" "}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};
export default SignIn;
