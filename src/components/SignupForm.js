import React, {useState} from 'react'
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { register } from '../actions/userActions'

import { LinkContainer } from 'react-router-bootstrap'

function LoginForm({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()


    const userRegister = useSelector(state => state.userRegister)
    const { error, loading } = userRegister



    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    }
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader />}
                    <p id="joinus">Join Us</p>
                    <p id="info">Please provide the following information to sign up</p>


                    <Form className="formgroup" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="fullname">Full Name</Form.Label><br/>
                        <Form.Control type="email" placeholder="e.g John Doe" className="inputfullname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="fullname">Username</Form.Label><br/>
                        <Form.Control type="email" placeholder="Enter username" className="inputfullname"/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="fullname">Email address</Form.Label><br/>
                        <Form.Control type="email" placeholder="Enter email" className="inputfullname"/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="fullname">Phone Number</Form.Label><br/>
                        <Form.Control type="email" placeholder="Phone Number" className="inputfullname"/>

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label id="fullname">Password</Form.Label><br/>
                        <Form.Control type="password" placeholder="Password" className="inputfullname"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <p id="forgot">Forgot Password</p>
                    </Form.Group>
                    <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                        <Form.Select aria-label="Floating label select example">
                            <option>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Date of Birth">
                        <Form.Control type="email" placeholder="DD/MM/YYYY" />
                        </FloatingLabel>
                    </Col>
                    </Row>
                    <Button type="submit" id="submit">
                        Sign Up
                    </Button>

                    </Form>
                    <p id="haveaccount">Have an account? <LinkContainer to="/"><span>Login</span></LinkContainer></p>
                    <button id="continuewithfb"><span id="facebooktext">Continue with Facebook</span></button>
                    <br/><br/>
                    <button id="continuewithg"><span id="googletext">Continue with Google</span></button>
                </Col>
                <Col sm={12} md={6}>
                    
                </Col>
            </Row>

            
        </Container>
    )
}

export default LoginForm
