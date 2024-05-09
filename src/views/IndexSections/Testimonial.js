import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Testimonial = ({ name, position, comment }) => {
  return (
    <Card className="testimonial-card">
      <CardBody>
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardText>{comment}</CardText>
        <p className="text-muted">{position}</p>
      </CardBody>
    </Card>
  );
};

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Aarav Patel",
      position: "Founder, TechCo",
      comment: "Working with this team has been an absolute pleasure. Their attention to detail and dedication to our project exceeded our expectations."
    },
    {
      name: "Sanya Gupta",
      position: "CEO, MarketingPro",
      comment: "I've been impressed with the professionalism and expertise of this company. They helped us launch our campaign successfully and achieve our goals."
    },
    {
      name: "Arjun Sharma",
      position: "Director of Operations, FinTech Solutions",
      comment: "The team provided excellent support throughout our collaboration. They were responsive, proactive, and delivered results that positively impacted our business."
    },
    {
      name: "Priya Singh",
      position: "CTO, InnovateTech",
      comment: "I highly recommend their services. Their technical skills, combined with their creative approach, were instrumental in bringing our project to life."
    }
  ];
  

  return (
    <section className="section section-lg bg-gradient-warning">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <h2 className="text-white text-center mb-5">Testimonials</h2>
            <Row>
              {testimonials.map((testimonial, index) => (
                <Col key={index} lg="6" className="mb-4">
                  <Testimonial {...testimonial} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
