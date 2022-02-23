import React, { useState } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";

const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } =
            userCredentials;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            setCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={userCredentials.displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
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
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={userCredentials.confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit"> Sign Up </CustomButton>
            </form>
        </div>
    );
};
export default SignUp;
