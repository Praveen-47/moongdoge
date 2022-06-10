import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Prizes.css";

export const Prizes = () => {
  return (
    <div className="prizes pd-b-100 pd-t-80" id="prizes">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Prizes</h2>
          </Col>
          <Col md={6}>
            <div className="prize__container">
              <h3>Astral Tier Prizes</h3>
              <ol>
                <li>
                  In Person Reiki Holy Fire 3 Course with William Rand from ICRT
                  Level 1/2 or Master (Hawaii) $5,000.
                </li>
                <li>
                  Online Reiki Holy Fire 3 Courses with William Rand from ICRT
                  Level 1/2 and Master (Online) $3,500.
                </li>
                <li>
                  You receive four 1:1 sessions with Awakened Human (5 winners).
                </li>
                <li>
                  Customized NFT - personalized just for you - created by
                  Awakened Human and Thoth. Pick your galactic, universe,
                  galaxy, source energy and we will bring it down for you.{" "}
                </li>
                <li>
                  Large Lemurian Crystal Cluster $1,500 + Shipping. Activated by
                  Thoth. This is a crystal that Thoth knew from over 90,000
                  years ago which has agreed to spend the next century or so in
                  your presence, in your home, with your family. Thoth locked
                  all of the Lemurian crystals from living Atlantis before the
                  destruction, and has slowly been unlocking some, this is your
                  opportunity to receive one with Atlantean programming. In
                  Thoth's opinion, this is the best prize we have.
                </li>
              </ol>
            </div>
          </Col>

          <Col md={6}>
            <div className="prize__container">
              <h3>Starseed Tier Prizes</h3>
              <ol>
                <li>
                  All-inclusive yoga teacher training course in Greece OR
                  COUNTRY OF CHOICE WITHIN THE $20,000 Value.
                </li>
                <li>
                  All-inclusive Flight + Stay Sedona style Healing Retreat.
                  (Turks and Caicos Islands, Costa Rica, Japan, Oman, Nicaragua)
                  $10,000+.
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
