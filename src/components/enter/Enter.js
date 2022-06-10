import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Enter.css";

export const Enter = () => {
  return (
    <div className="enter pd-b-100 pd-t-80">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Enter the world of thoth</h2>
          </Col>
          <Col md={6}>
            <div className="enter__text">
              <p>
                Which Energy Elixir will you receive? Which one of the Emerald
                Tablets does Thoth want to reveal to you?
              </p>
              <p>
                Or buy all 14 and embark on a journey of Awakening that has laid
                dormant for centuries.
              </p>
              <p>
                These NFT’s are other worldly: an Energetic Elixir that will
                help awaken you to your purpose and mission and help move you
                towards enlightenment, in a way that takes you back to the times
                of Atlantis, but offers a different outcome.
              </p>
            </div>
          </Col>
          <Col md={6}>
              <div className="enter__content">
              <h3>
              AWAKENED HUMAN THOTH NFT’S are embedded with different Awakening
              Codes/ Energetic Elixirs.{" "}
            </h3>
            <p>Your NFT will assist YOU with one of the 14 Template Programs.</p>
            <Row>
                <Col md={6}>
                    <ul>
                        <li>ELIXIR’S</li>
                        <li>‘I AM’ PEACE/BLISS</li>
                        <li>WISDOM OF ALL</li>
                        <li>MANIFESTATION STIMULATOR</li>
                        <li>TRUTH SEER/NO FEAR</li>
                        <li>‘I AM ‘ABUNDANCE </li>
                        <li>HEALTH</li>
                        <li>ACCESS ALL TIMELINES-DIMENSIONS</li>
                    </ul>
                </Col>

                <Col md={6}>
                    <ul>
                        <li>REMEMBRANCE</li>
                        <li>ASTRAL TRAVEL</li>
                        <li>ATLANTIAN PAST LIVES</li>
                        <li>EGYPTIAN PAST LIVES</li>
                        <li>AKASHIC RECORDS</li>
                        <li>GALACTIC</li>
                        <li>UNITY/CHRIST CONSCIOUSNESS</li>
                        <li>FOUNTAIN OF YOUTH STIMULATOR</li>
                    </ul>
                </Col>
            </Row>
              </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
