import React, { useState } from "react";
import { loginSchema, history } from "../common"
import { Formik, Form, Field } from 'formik';
import { envConstants, apiUrls } from "../env.constants";

export function AuthForm(props) {
    const [login, setLogin] = useState(true);
    const { setLoginData } = props;
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding" style={{ backgroundColor: '#f1f1f1' }}>
                <h4>{login ? "Login" : "Register"}</h4>
            </div>
            <div className="w3-container w3-white" style={{ padding: '1rem' }}>
                {login ? <Login setLoginData={setLoginData} /> : <Register />}
                <span style={{ cursor: 'pointer' }} onClick={() => setLogin(!login)}>
                    <u>{login ? "Register" : "Login"}</u>
                </span>
            </div>
        </div>
    )
}


function Login(props) {
    const { setLoginData } = props;
    function handleSubmit(values, formikApi) {
        const loginUrl = `${envConstants.BASE_URL}${apiUrls.LOGIN}`;
        fetch(loginUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values)
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(response => {
            formikApi.setSubmitting(false);
            setLoginData(response)
            history.push("/home")
        }).catch(err => {
            formikApi.setSubmitting(false);
            formikApi.setErrors({
                email: 'Invalid email',
                password: 'Invalid password'
            })
        })
    }
    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={loginSchema} onSubmit={handleSubmit}>
            {({ errors, isSubmitting, touched }) => (<Form>
                <label ><b>Email:</b></label>
                <Field className="w3-input w3-border" name="email" type="text" />
                {errors.email && touched.email && <div className="error">{errors.email}</div>}
                <label ><b>Password:</b></label>
                <Field className="w3-input w3-border" name="password" type="password" />
                {errors.password && touched.password && <div className="error">{errors.password}</div>}
                <button disabled={isSubmitting} type="submit" className="w3-btn w3-black" style={{ marginTop: '1rem', marginBottom: '1rem' }}>{isSubmitting ? "Login ..." : "Login"}</button>
            </Form>)}
        </Formik>
    )
}



function Register() {
    return (
        <Form>
            <label><b>Name</b></label>
            <input className="w3-input w3-border" type="text" />
            <label><b>Email</b></label>
            <input className="w3-input w3-border" type="text" />
            <label ><b>Password</b></label>
            <input className="w3-input w3-border" type="password" />
            <button className="w3-btn w3-black" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Register</button>
        </Form>
    )
}