import React, {useState} from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import './Login.scss';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Signup(){

    const [user, setUser] = useState({
        email: "",
        password: "",
        rePassword: ""
    })

    const handleChange = e =>{
        const { email, value} = e.target
        setUser({
            ...user,
            [email]:value
        })
    }

    return(
        <Container className="login-form">
            <div className="page-header">
                <h1>Sign Up</h1>
                <p>Please enter your e-mail and password:</p>
                <div className="social-icon">
                    <SiFacebook />
                    <FcGoogle />
                </div>
            </div>
 
            <div className="page-form">
                <Form>
                    <input type="email" name="email" value={user.email} onChange='handleChange' placeholder="Email" />
                    <input type="password" name="password" value={user.password} onChange='handleChange' placeholder="Password" />
                    <input type="password" name="rePassword" value={user.rePassword} onChange='handleChange' placeholder="Re-Password" />

                    <Button>Login</Button>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </Form>
            </div>
        </Container>
    )
}
export default Signup;