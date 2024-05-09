import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

function Features() {
  return (
    <section className="section section-lg pt-lg-0 mt--100" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-bell-55" />
                    </div>
                    <h6 className="text-primary text-uppercase">
                      Customizable Reminders
                    </h6>
                    <p className="description mt-3">
                    Allow users to set up reminders for upcoming payments, such as bills, subscriptions, or loans.
                    </p>
                    <div>
                      
                    </div>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i className="ni ni-email-83" />
                    </div>
                    <h6 className="text-success text-uppercase">
                      Email Invoicing
                    </h6>
                    <p className="description mt-3">
                      Enable users to send invoices directly via email from within the app, streamlining the billing process to customers.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i className="ni ni-single-02" />
                    </div>
                    <h6 className="text-warning text-uppercase">
                      Customer Management
                    </h6>
                    <p className="description mt-3">
                    Provide a built-in customer management system where users can organize and track customer details.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
