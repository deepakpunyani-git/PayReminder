import React, { useEffect, useState, useRef } from 'react';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import Navbar from "../components/Navbars/Navbar.js";
import Footer from "../components/Footers/Footer.js";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [token, setToken] = useState(null);
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);

  useEffect(() => {
    const verifyTokenAndRedirect = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/verifyToken`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: storedToken }),
          });
          if (response.ok) {
            setToken(storedToken);
            navigate('/');
            showAlert('Successfully logged in with existing token!', 'success');
          } else {
            localStorage.removeItem('token');
            showAlert('Failed to verify token!', 'danger');
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          showAlert('Error verifying token!', 'danger');
        }
      }
    };

    verifyTokenAndRedirect();
  }, [navigate]);

  const showAlert = (message, type) => {
    setErrorAlertVisible(true);
    setTimeout(() => {
      setErrorAlertVisible(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
     
          <Container className="pt-lg-7">
          {errorAlertVisible && (
            <div className="alert alert-danger alert-dismissible show" role="alert">
              <button type="button" className="close" aria-label="Close" onClick={() => setErrorAlertVisible(false)}>
                <span aria-hidden="true">×</span>
              </button>
              <span className="alert-inner--icon"><i className="ni ni-support-16"></i></span>
            </div>
          )}
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href={process.env.REACT_APP_API_URL + 'auth/google'}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../assets/img/icons/common/google.svg").default}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
