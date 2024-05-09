import React from "react";
import { Card, CardImg, Container, Row, Col } from "reactstrap";

function Aboutus() {
  return (
    <>
      <section className="section bg-secondary">
        <Container>
          <Row className="row-grid align-items-center">
            <Col md="6">
              <Card className="bg-default shadow border-0">
                <CardImg
                  alt="..."
                  src={require("../../assets/img/theme/img-1-1200x1000.jpg")}
                  top
                />
                <blockquote className="card-blockquote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-bg"
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                  >
                    <polygon
                      className="fill-default"
                      points="0,52 583,95 0,95"
                    />
                    <polygon
                      className="fill-default"
                      opacity=".2"
                      points="0,42 583,95 683,0 0,95"
                    />
                  </svg>
                  <h4 className="display-3 font-weight-bold text-white">
                    Pay Reminder
                  </h4>
                  <p className="lead text-italic text-white">
                    Effortlessly manage payments, invoices, and customer relationships with our intuitive app designed for both small and modular businesses.
                  </p>
                </blockquote>
              </Card>
            </Col>
            <Col md="6">
              <div className="pl-md-5">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                  <i className="ni ni-money-coins" />
                </div>
                <h3>About Us</h3>
                <p className="lead">
                At Pay Reminder, we're dedicated to helping you stay on top of your finances effortlessly. With intuitive features and personalized solutions, we strive to make managing your payments a breeze. Our mission is to empower individuals and businesses to take control of their financial well-being, one reminder at a time.
                </p>
                <p>
                At Pay Reminder, we're here for both small and modular businesses. Simplify your finances with our intuitive solutions tailored to your needs
                </p>
          
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Aboutus;
