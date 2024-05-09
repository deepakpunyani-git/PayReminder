import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Badge,
  TabContent,
  TabPane,
} from "reactstrap";

function Pricing() {
  const [plainTabs, setPlainTabs] = useState("monthly");
  const [plans, setPlans] = useState([]);


  
  const toggleNavs = (tab) => {
    setPlainTabs(tab);
  };

  useEffect(() => {
    fetchPlans();
  }, []);


  const fetchPlans = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+'/plans');
      if (!response.ok) {
        throw new Error('Failed to fetch plans');
      }
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  }

  const [toggleState, setToggleState] = useState(false);
  const handleToggle = () => {
    setToggleState(!toggleState);
    toggleNavs(toggleState ? "monthly" : "yearly");
  };

  return (
    <>
      <section className="section section-lg" id="pricing">
        <Container>
          <h3 className="h4 text-success font-weight-bold mb-4">
            Discover Your Ideal Plan
          </h3>
          <Row className="justify-content-center">
            <Col className="mt-5 mt-lg-0" lg="12">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Begin expanding your business at no cost. Upgrade to a premium plan when you're prepared to launch.
                </small>
              </div>
              {/* Toggle Button */}
              <div className="text-center mb-3">
                <label className="custom-toggle">
                  <input
                    type="checkbox"
                    checked={toggleState}
                    onChange={handleToggle}
                  />
                  <span className="custom-toggle-slider rounded-circle" />
                </label>
                <span className="ml-2">{toggleState ? "Yearly" : "Monthly"}</span>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent activeTab={"plainTabs" + plainTabs}>
                    <TabPane tabId={"plainTabsmonthly"}>
                      <Row className="justify-content-center">
                        {plans.map((plan, index) => (

                          <Col lg="4">
                            <Card className="card-pricing bg-gradient-primary border-0 text-center mb-4">
                              <CardBody>
                                <h6 className="text-uppercase text-muted ls-1 text-white py-3 mb-0">
                                  {plan.name}
                                </h6>
                                <div className="display-2 text-white">₹ {plan.monthlyPrice}/Per Month</div>
                               <ul className="list-unstyled my-4">
                                 {plan.features.map((feature,data)=>(
                                    <li>
                                      <div className="d-flex align-items-center">
                                    
                                        <div>
                                          <h6 className="text-white mb-0">{feature}</h6>
                                        </div>
                                      </div>
                                    </li> 
                                  ))}
                                </ul>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId={"plainTabsyearly"}>
                      <Row className="justify-content-center">
                        {plans.map((plan, index) => (

                          <Col lg="4">
                            <Card className="card-pricing bg-gradient-primary border-0 text-center mb-4">
                              <CardBody>
                                <h6 className="text-uppercase text-muted ls-1 text-white py-3 mb-0">
                                  {plan.name}
                                </h6>
                                <div className="display-2 text-white">₹ {plan.monthlyPrice}/Per Year</div>
                               <ul className="list-unstyled my-4">
                                 {plan.features.map((feature,data)=>(
                                    <li>
                                      <div className="d-flex align-items-center">
                                    
                                        <div>
                                          <h6 className="text-white mb-0">{feature}</h6>
                                        </div>
                                      </div>
                                    </li> 
                                  ))}
                                </ul>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </TabContent>
                  <div className="text-center">
                    <a href="/register" className="btn btn-success">
                      Get Started
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pricing;
