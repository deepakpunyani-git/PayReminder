import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us
              </UncontrolledTooltip>
              {/* Add more Button and UncontrolledTooltip components here */}
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                {/* Add more NavItem and NavLink components here */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default SimpleFooter;
