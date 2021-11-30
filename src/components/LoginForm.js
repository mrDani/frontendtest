import React,{useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'

function LoginForm({location, history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader />}
                    <p id="joinus">Welcome Back</p>
                    <p id="info">Please provide the following information to login</p>


                    <Form className="formgroup" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="fullname">Email address</Form.Label><br/>
                        <Form.Control type="email" placeholder="Enter email" className="inputfullname"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label id="fullname">Password</Form.Label><br/>
                        <Form.Control type="password" placeholder="Password" className="inputfullname"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <p id="forgot">Forgot Password</p>
                    </Form.Group>
                    <Button type="submit" id="submit">
                        Submit
                    </Button>

                    </Form>
                    <p id="haveaccount">Don't have an account?
                    <LinkContainer to={redirect ? `/?redirect=${redirect}` : '/signup'}>
                        <span>Sign Up</span>
                    </LinkContainer>
                     </p>
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
