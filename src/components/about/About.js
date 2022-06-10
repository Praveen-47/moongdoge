import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import NFT11 from "../../assets/images/nft7.jpeg";
import NFT8 from "../../assets/images/nft8.jpeg";
import NFT3 from "../../assets/images/nft3.jpeg";
import NFT5 from "../../assets/images/nft5.jpeg";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"

export const About = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    if(window.screen.width>=1199){
      gsap.from(".about__content",{
        x:"-200px",
        filter: "blur(5px)",
        opacity:"0",
        scrollTrigger:{
          trigger:".about__content",
          scrub:"0.18",
          end:"+=600px"
          // start:"top"
        },
      })
  
      gsap.from(".about__content p",{
        x:"200px",
        filter: "blur(5px)",
        stagger:1,
        opacity:"0",
        duration:5,
        scrollTrigger:{
          trigger:".about__content p",
          scrub:"0.18",
          // start:"top center",
          end:"+=700px"
        },
      })
  
      gsap.from(".about__img img",{
        x:"100px",
        filter: "blur(5px)",
        opacity:"0",
        // duration:"1",
        scrollTrigger:{
          trigger:".about__content",
          scrub:0.18,
          // start:"top center",
          end:"+=500px"
        },
      })
    }

    else if(window.screen.width<=992){
      gsap.from(".about__content",{
        x:"-200px",
        filter: "blur(5px)",
        opacity:"0",
        scrollTrigger:{
          trigger:".about__content",
          // scrub:"0.18",
          // end:"+=600px"
          // start:"top"
        },
      })
  
      gsap.from(".about__content p",{
        x:"50px",
        filter: "blur(5px)",
        stagger:0.5,
        opacity:"0",
        duration:1,
        scrollTrigger:{
          trigger:".about__content p",
          // scrub:"0.18",
          // start:"top center",
          // end:"+=700px"
        },
      })
  
      gsap.from(".about__img img",{
        x:"20px",
        filter: "blur(5px)",
        opacity:"0",
        // duration:"1",
        scrollTrigger:{
          trigger:".about__img img",
          // scrub:true,
          // start:"top center",
          // end:"+=300px"
        },
      })
    }
    
  },[])


  return (
    <div className="about pd-b-100 pd-t-80" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about__content">
              <h2>About</h2>
              <p>
                Dinosaurs once roamed the world as kings, until a meteor wiped
                them from existence in the blink of an eye. Yet despite the
                destruction that rampaged across planet Earth, those who could
                adapt, survived. Birds took flight and sought safety in the
                skies. Crocodiles sank below the water until it was safe to
                return. Unfortunately, the human extinction event was even more
                apocalyptic.  
              </p>
              <p>
              In the year 2062, When Meteor 5773 collided with
                the Australian outback, all life on Earth was instantly
                obliterated… or so we thought. A small colony of cats had been
                living underground in a bunker in the projects as a part of a
                human experiment dubbed The Project Cats. But their feline
                prison turned out to be their savior. After months of learning,
                growing, and working together, the cats managed to escape and
                return to the surface as the new planetary leaders.
              </p>
              <p>
              Now banded together as a tight-knit family, the Project Cats live in small
                project neighborhoods across the world. Day by day, month by
                month, year by year, the cats rebuilt an Earth society in their
                own image, eventually surpassing the technology even humans had
                been able to develop. This new world was unique, futuristic, and
                idealistic, with NFTs and Cryptocurrency ruling all. Welcome to
                the future. Welcome to The Project Cats.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about__img">
              <Row>
                <Col md={6}>
                  <img src={NFT11} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT8} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT3} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT5} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
