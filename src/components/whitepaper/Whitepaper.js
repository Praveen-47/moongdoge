import React from "react";
import "./Whitepaper.css";
import { Col, Container, Row } from "react-bootstrap";
import $ from "jquery"

export const Whitepaper = () => {

    const showWhitepaper = ()=>{
        $('.whitepaper__content').toggleClass('show-whitepaper');
        if($('.whitepaper__section .whitepaper').html()==='Read More'){
            $('.whitepaper__section .whitepaper').html("Read Less");
        } else if($('.whitepaper__section .whitepaper').html()==='Read Less'){
        $('.whitepaper__section .whitepaper').html("Read More");
    }
        
    }

  return (
    <div className="whitepaper__section pd-b-100 pd-t-80" id="whitepaper">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Whitepaper</h2>
          </Col>
          <Col md={12}>
              <div className="whitepaper__content">
              <p>
              <strong>Awakened Human</strong>
            </p>
            <p>
              In the midst of societal chaos and despair, there is hope. In the
              times of Atlantis, and before, the ability to see beyond the
              constructs of another and to go within and tap into our divinity
              through source was possible.
            </p>
            <p>
              Much like in Atlantean times, separation/power of a few, and
              technology are used for power and control, where humans are
              following a path to possible destruction.{" "}
            </p>
            <p>
              There is another way. Opening our connection by utilizing
              technology and energy in a way that will empower each human is our
              mission. This collection is unique and goes way beyond a digital
              graphic. Each NFT has been energized with sacred codes and
              energies to awaken dormant cellular remembrance/DNA, and that
              energy in the NFT will connect to the owner’s morphic field,
              thereby AWAKENING individuals to their power.
            </p>
            <p>
              Awakened Human is a movement, a group of humans who have started
              to awaken themselves, and who have access to members only
              benefits. Awakened Human calls you to Awaken your potential, a
              call to take action. In awakening yourself, you become one of
              those who will help humanity reach a tipping point, so that we may
              awaken others and raise the vibration of our planet.{" "}
            </p>
            <p><strong>Welcome Awakened Human.</strong></p>
              </div>
            <a className="whitepaper" onClick={showWhitepaper}>Read More</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
