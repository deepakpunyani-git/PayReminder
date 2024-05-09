import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  Button
} from "reactstrap";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, as well as PayPal.",
      isOpen: true
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no additional fees.",
      isOpen: false
    },
    {
      question: "Is my financial information secure?",
      answer: "Absolutely! We use industry-standard encryption to protect your financial data.",
      isOpen: false
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all purchases.",
      isOpen: false
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we are transparent about our pricing. There are no hidden fees.",
      isOpen: false
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 to assist you with any inquiries or issues.",
      isOpen: false
    }
  ]);

  const toggleFAQ = index => {
    const updatedFAQs = faqs.map((faq, i) => {
      if (i === index) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
      return faq;
    });
    setFaqs(updatedFAQs);
  };

  return (
    <section className="section section-lg" id="faqs">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-3">
                <CardBody>
                  <Button
                    color="link"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={faq.isOpen ? "true" : "false"}
                  >
                    <h5 className="card-title">{faq.question}</h5>
                  </Button>
                  <Collapse isOpen={faq.isOpen}>
                    <p className="card-text">{faq.answer}</p>
                  </Collapse>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
