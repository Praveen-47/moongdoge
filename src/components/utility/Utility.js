import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Utility.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Utility = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.screen.width > 1199) {
      gsap.from(".single__benefit", {
        x: "-200px",
        // filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".single__benefit",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });

      // gsap.from(".single__benefit p",{
      //   x:"-200px",
      //   // filter: "blur(5px)",
      //   stagger:0.5,
      //   opacity:"0",
      //   duration:0.5,
      //   scrollTrigger:{
      //     trigger:".single__benefit p",
      //     // scrub:"0.25",
      //     // end:"+=600px"
      //     // start:"top"
      //   },
      // })
    }

    if (window.screen.width < 992) {
      gsap.from(".single__benefit", {
        x: "-200px",
        // filter: "blur(5px)",
        stagger: 0.5,
        opacity: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".single__benefit",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      });
    }
  }, []);

  return (
    <div className="utility pd-b-100 pd-t-80" id="utility">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Benefits and Utilities</h2>
            {/* <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
              mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
              condimentum neque. Sed varius urna ante, eget euismod risus
              tristique eget. Maecenas vehicula massa sit amet tristique
              pellentesque.
            </h3> */}
          </Col>
          <Col md={4}>
            <div className="single__benefit">
              <h3>HOLDERS REWARDING</h3>
              <p>
                Token holders can enjoy $GMT dividends. RunningMan coin has its
                own dividend $GMT mechanism. For some holders who want to be
                lazy, holding $RMC token is nothing more than the best way to
                get returns and counter the popular GMT token.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single__benefit">
              <h3>SPORTFI+GAMEFI</h3>
              <p>
                RM is a project that encourages people to participate in sports,
                so running will also gain benefits, and token holders can enter
                sports mode by obtaining NFTs. ​ In addition to running in
                reality, you can also run and get rewards in the game. Remember
                the once popular Temple Run, now we combine it with the
                blockchain and integrate the elements of GAMEFI+SPORTS.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single__benefit">
              <h3>COMMUNITY NFT</h3>
              <p>
                You can participate in running by holding Running Man NFT When
                the holding address reaches 1000, the top 200 addresses can get
                the advanced NFT airdrop
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
