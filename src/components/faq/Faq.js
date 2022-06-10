import React, { useEffect } from "react";
import "./Faq.css";
import { Col, Container, Row } from "react-bootstrap";
import Plus from "../../assets/images/plus.svg";
import $ from "jquery";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"

export const Faq = () => {
  const showAnswerHandler = (e) => {
    const id = e.target.id;
    const answers = [...$(".answer")];
    const answer = answers.find((el) => el.id === id);
    $(answer).toggleClass("show-answer");
    const images = [...$(".question img")];
    const img = images.find((el) => el.id === id);
    $(img).toggleClass("rotate-icon");
    const questions = [...$(".question")];
    const question = questions.find((el) => el.id === id);
    $(question).toggleClass("question-bg");
    const buttons = [...$(".question button")];
    const button = buttons.find((el) => el.id === id);
    $(button).toggleClass("button-color");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if(window.screen.width>1199){
      gsap.from(".question",{
        x:"-200px",
        // filter: "blur(5px)",
        stagger:0.5,
        opacity:"0",
        duration:0.5,
        scrollTrigger:{
          trigger:".question",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      })
    }

    if(window.screen.width<992){
      gsap.from(".question",{
        x:"-200px",
        // filter: "blur(5px)",
        stagger:1,
        opacity:"0",
        duration:0.5,
        scrollTrigger:{
          trigger:".question",
          // scrub:"0.25",
          // end:"+=600px"
          // start:"top"
        },
      })

    }

},[])

  return (
    <div className="faq pd-b-100 pd-t-80" id="faq">
      <Container>
        <Row>
          <Col md={12}>
            <h2>FAQ</h2>
          </Col>
          <Col md={12}>
            <div className="question" id="1">
              <h3 onClick={showAnswerHandler} id="1">
                <img src={Plus} alt="" id="1" />
                <button id="1">How many Project Cats will exist?</button>
              </h3>

              <div className="answer" id="1">
                <p>3,333 Project Cats NFTs</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="2">
              <h3 onClick={showAnswerHandler} id="2">
                <img src={Plus} alt="" id="2" />
                <button id="2">
                  How many Ultra Rare Project Cats will exist?
                </button>
              </h3>

              <div className="answer" id="2">
                <p>10 Ultra Rare 1/1 Project Cats NFTs</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="3">
              <h3 onClick={showAnswerHandler} id="3">
                <img src={Plus} alt="" id="3" />
                <button id="3">How Much will it cost to mint?</button>
              </h3>

              <div className="answer" id="3">
                <p>The public mint price will be .09 ETH</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="4">
              <h3 onClick={showAnswerHandler} id="4">
                <img src={Plus} alt="" id="4" />
                <button id="4">How will the DAO operate and work?</button>
              </h3>

              <div className="answer" id="4">
                <p>
                  In the early stages, the DAO will be more controlled. In later
                  stages, the control over the contract will be incrementally
                  released until 100% decentralization is reached.
                </p>
              </div>
            </div>
          </Col>

          {/* <Col md={12}>
            <div className="question" id="5">
              <h3 onClick={showAnswerHandler} id="5">
                <img src={Plus} alt="" id="5" />
                <button id="5">What is the Supply?</button>
              </h3>

              <div className="answer" id="5">
                <p>2800</p>
              </div>
            </div>
          </Col> */}

          {/* <Col md={12}>
            <div className="question" id="6">
              <h3 onClick={showAnswerHandler} id="6">
                <img src={Plus} alt="" id="6" />
                <button id="6">How much does minting cost?</button>
              </h3>

              <div className="answer" id="6">
                <p>0.2 Ethereum</p>
              </div>
            </div>
          </Col> */}

          <Col md={12}>
            <div className="question" id="7">
              <h3 onClick={showAnswerHandler} id="7">
                <img src={Plus} alt="" id="7" />
                <button id="7">Which Blockchain is this on?</button>
              </h3>

              <div className="answer" id="7">
                <p>The Project Cats live on the Ethereum Blockchain</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="8">
              <h3 onClick={showAnswerHandler} id="8">
                <img src={Plus} alt="" id="8" />
                <button id="8">What is an NFT?</button>
              </h3>

              <div className="answer" id="8">
                <p>
                  NTFs are digital assets that use the blockchain technology to
                  showcase proof of ownership. These tokens store a unique and
                  non-interchangeable unit of data stored on a digital ledger.
                  NFTs can be associated with items such as photos, videos,
                  audios, games and many other types of digital files.
                </p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="9">
              <h3 onClick={showAnswerHandler} id="9">
                <img src={Plus} alt="" id="9" />
                <button id="9">What is a Utility? </button>
              </h3>

              <div className="answer" id="9">
                <p>
                  A measurement of usefulness of an NFT project. NFTs can grant
                  unique perks and special access to exclusive areas only
                  permitted to the holder. These utilities may also allow you to
                  participate in real world events, video games or economies
                  within an NFT community.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
