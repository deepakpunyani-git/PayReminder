import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
} from "reactstrap";

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("../../assets/img/brand/logo-pg.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-toggler">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar-toggler"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/"> {/* Use Link instead of anchor tag */}
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar-close">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className=""
                    tag={Link}
                    to="/#about" 
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    tag={Link}
                    to="/#features" 
                  >
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    tag={Link}
                    to="/#pricing" 
                  >
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    tag={Link}
                    to="/#contactus" 
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    tag={Link}
                    to="/#faqs" 
                  >
                    FAQS
                  </NavLink>
                </NavItem>
              
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="tooltip333589074"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="tooltip356693867"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="tooltip184698705"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="pr-0"
                    to="/register"
                  >
                   Register
                  </NavLink>
                </NavItem>
                <NavItem className="d-md-noned-none d-lg-block nav-item"><NavLink className="pl-0 pr-0">/</NavLink></NavItem>
                <NavItem>
                  <NavLink
                    className="pl-0"
                    tag={Link}
                    to="/login" 
                  >
          
                  Login
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
