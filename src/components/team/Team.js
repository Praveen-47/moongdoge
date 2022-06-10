import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Team.css";
import NFT1 from "../../assets/images/nft1.jpeg";
import Team1 from "../../assets/images/team-1.jpeg";
import Team2 from "../../assets/images/team-2.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Team = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.screen.width > 1199) {
      gsap.from(".team__member", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".team__member h3", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        duration: 1,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".team__member p", {
        x: "-100px",
        filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });
    }

    if (window.screen.width < 992) {
      gsap.from(".team__member", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 1,
        opacity: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".team__member h3", {
        x: "-200px",
        filter: "blur(5px)",
        stagger: 1,
        opacity: "0",
        duration: 1,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      gsap.from(".team__member p", {
        x: "-100px",
        filter: "blur(5px)",
        stagger: 1,
        opacity: "0",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".team__member",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });
    }
  }, []);

  return (
    <div className="team pd-b-100 pd-t-80" id="team">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Team</h2>
          </Col>
          <Col md={4}>
            <div className="team__member">
              <img
                src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
                alt=""
              />
              <div className="member__details">
                <h3>Mintcasso</h3>
                <p>Creative Director / Founder</p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="team__member">
              <img
                src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
                alt=""
              />
              <div className="member__details">
                <h3>Wiz</h3>
                <p>Co-Creator & Co-Founder</p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="team__member">
              <img
                src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
                alt=""
              />
              <div className="member__details">
                <h3>Mouse</h3>
                <p>3D Illustrator</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
