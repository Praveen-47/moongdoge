import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.css";
import Arrow from "../../assets/images/arrow.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Roadmap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.screen.width > 1199) {
      gsap.from(".roadmap__content__2", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        scrollTrigger: {
          trigger: ".roadmap__content__2",
          scrub: "0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".roadmap__content__1", {
        x: "100px",
        filter: "blur(5px)",
        stagger: 2,
        opacity: "0",
        scrollTrigger: {
          trigger: ".roadmap__content__1",
          scrub: "0.1",
          // end:"+=800px"
          // start:"top"
        },
      });
    } else if (window.screen.width < 992) {
      gsap.from(".roadmap__content__2", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 2.5,
        opacity: "0",
        scrollTrigger: {
          trigger: ".roadmap__content__2",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".roadmap__content__1", {
        x: "20px",
        filter: "blur(5px)",
        stagger: 2.5,
        opacity: "0",
        scrollTrigger: {
          trigger: ".roadmap__content__1",
          // scrub:"0.1",
          // end:"+=800px"
          // start:"top"
        },
      });
    }
  }, []);

  return (
    <div className="roadmap pd-b-100 pd-t-80" id="roadmap">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Roadmap</h2>
          </Col>
          <Col md={6}></Col>
          <Col md={6} className="sec-1">
            <div className="roadmap__content roadmap__content__1">
              <h2>Q1 2022</h2>
              <p>
                Team task assignment, website construction, model design,
                completion of initial market work and research
              </p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-2">
            <div className="roadmap__content roadmap__content__2">
              <h2>Q2 2022</h2>
              <p>
                Complete contract audit, presale, and launch of Pancake, connect
                with influential publicists to promote the market. Develop NFT.
                When the number of token holders reaches 1,000, an NFT snapshot
                airdrop will be performed to the top 200 users.
                {/* <br /> We will begin the public mint soon after. */}
              </p>
              <img src={Arrow} className="arrow-2" alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-3">
            <div className="roadmap__content roadmap__content__1">
              <h2>Q3 2022</h2>
              <p>
                Complete the launch of APP, launch CEX, and complete the
                development of interesting NFT games and pledge mining
              </p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-5">
            <div className="roadmap__content roadmap__content__2">
              <h2>Q4 2022</h2>
              <p>App upgrades, bug fixes, sponsor marathons or sports events</p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          {/* <Col md={6} className="sec-7">
            <div className="roadmap__content roadmap__content__1">
              <h2>
                SkiHiLabs <br /> Continues
              </h2>
              <p>
                SkiHiLabs will continue to support our community with future
                giveaways, airdrops, and much more. SkiHiLabs NFT owners will
                get access to future drops before the public mint. This is just
                the beginning of our meta verse journey! Stay tuned for more
                information & exciting news!
              </p> */}
          {/* <img src={Arrow} alt="" /> */}
          {/* </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
