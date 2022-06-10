import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Disclaimer.css";

export const Disclaimer = () => {
  return (
    <div className="disclaimer pd-b-100 pd-t-80">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Energy Healing Disclaimer</h2>
            <h4>
              Thoth NFT’s are energy elixirs with energy healing properties.
              Like a spiritual healing journey, they may awaken feelings, past
              remembrance, locked abilities, visions, etc.
            </h4>
            <div className="disclaimer__content">
              <h3>Disclaimer</h3>
              <p>
                Energy healing, crystal and sound healing as well as Reiki are
                considered alternative, complementary approaches and do not
                replace the need for traditional medical care through your
                physician or licensed professional. You should not stop, add, or
                change any medication or traditional treatment, without the
                advice, consent and direction of your physician. You are advised
                to seek the care of a licensed professional for any physical,
                mental or emotional concerns.
              </p>
              <p>
                The choices you make and the actions you take are solely your
                responsibility. You agree to completely hold harmless and
                absolutely indemnify Awakened Human and any persons associated
                with Awakened Human, from any and all liabilities and expenses.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
