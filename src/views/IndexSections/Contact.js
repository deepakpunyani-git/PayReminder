import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button
} from "reactstrap";

import classnames from "classnames";

function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // If no errors, send data to API
    sendDataToAPI(formData);
  };

  const sendDataToAPI = async (data) => {
    try {
      // Replace 'apiEndpoint' with your actual API endpoint
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      // Reset form data
      setFormData({ name: "", email: "", message: "" });
      // Show thank you message
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      // Optionally, display error message to user
    }
  };

  return (
    <>
      <section className="section section-lg bg-gradient-default" id="contactus">
        <Container className="pt-lg pb-300">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-white">Want to work with us?</h2>
              <p className="lead text-white">
                Join forces with us to streamline your financial operations and enhance your business efficiency. Let's work together to achieve your goals.
              </p>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              {!submitted ? (
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Contact Us</h4>
                    <FormGroup
                      className={classnames("mt-5", {
                        focused: nameFocused,
                        "has-danger": errors.name
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setNameFocused(true)}
                          onBlur={() => setNameFocused(false)}
                        />
                      </InputGroup>
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: emailFocused,
                        "has-danger": errors.email
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setEmailFocused(true)}
                          onBlur={() => setEmailFocused(false)}
                        />
                      </InputGroup>
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className={classnames("form-control-alternative", {
                          "is-invalid": errors.message
                        })}
                        cols="80"
                        name="message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ) : (
                <div className="text-center">
                  <h4 className="mb-4">Thank you for contacting us!</h4>
                  <p>We will get back to you as soon as possible.</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
