import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Features.css";

export const Features = () => {
  return (
    <div className="features pd-b-100 pd-t-80" id="features">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Features</h2>
          </Col>
          <Col md={6}>
            <div className="feature">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature last">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
