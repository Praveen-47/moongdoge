import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import NFT12 from "../../assets/image1.png";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";
import $ from "jquery";
import Modal from "@mui/material/Modal";
// import { toast } from "react-toastify";

import nft1 from "../../assets/image4.png";
// import Video from '../../assets/bg-video-2.mp4'
import gsap from "gsap";

var Web3 = require("web3");

export const Hero = ({
  mint,
  decrementMintAmount,
  incrementMintAmount,
  getData,
  config,
  mintAmount,
  dispatch,
  connect,
  data,
  blockchain,
  whitelistMint,
  error,
  pending,
  publicMint,
  freeMint,
}) => {
  const [open, setOpen] = useState(false);
  const [daysTimer, setDays] = useState("00");
  const [hoursTimer, setHours] = useState("00");
  const [minutesTimer, setMinutes] = useState("00");
  const [secondsTimer, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("June 5, 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const defaultfunc = () => {};

  useEffect(() => {
    if (blockchain?.errorMsg?.length > 0) {
      // toast.error(blockchain?.errorMsg, {
      //   position: "top-right",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      console.log(blockchain.errorMsg);
    } else if (blockchain?.successMsg?.length > 0) {
      // toast.success(blockchain?.successMsg, {
      //   position: "top-right",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      console.log(blockchain.successMsg);
    }
  }, [blockchain]);

  useEffect(() => {
    if (window.screen.width > 1199) {
      gsap.from(".hero__title", {
        x: "-300px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
      });

      gsap.from(".hero__secondary__title", {
        x: "100px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
      });

      // gsap.from(".hero__content img", {
      //   scale: 0,
      //   filter: "blur(5px)",
      //   duration: 1,
      //   opacity: 0,
      // });

      gsap.from(".timer__box", {
        y: "100px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
        stagger: 0.5,
      });
    } else if (window.screen.width < 992) {
      gsap.from(".hero__title", {
        x: "-300px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
      });

      gsap.from(".hero__secondary__title", {
        x: "20px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
      });

      // gsap.from(".hero__content img", {
      //   scale: 0,
      //   filter: "blur(5px)",
      //   duration: 1,
      //   opacity: 0,
      // });

      gsap.from(".timer__box", {
        y: "100px",
        filter: "blur(5px)",
        duration: 1,
        opacity: 0,
        stagger: 0.5,
      });
    }
  }, []);

  console.log(blockchain);
  return (
    <div className="hero pd-t-80 pd-b-100">
      {/* <div class="video__container"><video autoplay="true" loop muted><source src={Video} type="video/mp4"/></video></div> */}
      <div class="hero__bg__overlay"></div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="hero__content">
              <h2 className="hero__title">RUNNING MAN</h2>
              <img src={NFT12} alt="" width="300px" />
              <div className="timer">
                <Row>
                  <Col md={3}>
                    <div className="timer__box">
                      <h2>{daysTimer}</h2>
                      <h4>Days</h4>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="timer__box">
                      <h2>{hoursTimer}</h2>
                      <h4>Hours</h4>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="timer__box">
                      <h2>{minutesTimer}</h2>
                      <h4>Minutes</h4>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="timer__box">
                      <h2>{secondsTimer}</h2>
                      <h4>Seconds</h4>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* <h3>The Project Cats Collections</h3>
              <p className="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus-
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque. In id sapien sem. Sed vel pellentesque lorem.
              </p> */}
              <h4 className="hero__secondary__title">
                Please Connect binance testNetwork
              </h4>
              <a href="" className="whitepaper">
                Join Our Discord
              </a>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <>
                  <a
                    className="whitepaper mint"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect
                  </a>
                </>
              ) : (
                <a className="whitepaper mint" onClick={handleOpen}>
                  Mint
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <div className="mint__modal">
          <h3>
            {data.publicSale == true
              ? "Public Sale"
              : data.whiteListSale == true
              ? "Whitelist Sale"
              : "Sale Not started yet"}
          </h3>
          <p>
            {data.publicSale == true || data.whiteListSale == true
              ? "Sale started"
              : "Sale Not started"}
          </p>
          <p>3343 NFTs</p>
          <div className="balance modal__flex">
            <h5>Total Supply</h5>
            <p>{data.totalSupply}</p>
          </div>
          <hr />
          <div className="amount modal__flex">
            <h5>Amount</h5>
            <div className="amount__buttons">
              <img src={Minus} onClick={decrementMintAmount} alt="" />
              <h5>{mintAmount}</h5>
              <img src={Plus} onClick={incrementMintAmount} alt="" />
            </div>
            <a className="whitepaper">Max</a>
          </div>
          <hr />
          <div className="total modal__flex">
            <h5>Total</h5>
            {/* {console.log(data.whiteListCost)} */}
            <p>
              {data.publicSale == true
                ? Web3.utils.fromWei(String(data.publicCost), "ether") *
                  mintAmount
                : data.whiteListSale == true &&
                  Web3.utils.fromWei(String(data.whiteListCost), "ether") *
                    mintAmount}{" "}
              ETH
            </p>
          </div>
          <hr />
          <button
            // onClick={
            //   data.publicSale == true
            //     ? mint
            //     : data.whiteListSale == true
            //     ? whitelistMint
            //     : defaultfunc
            // }
            onClick={
              publicMint > 1 || publicMint == 1 ? whitelistMint : freeMint
            }
            disabled={error || pending ? true : false}
          >
            {pending === true ? "...PENDING" : "MINT"}
          </button>
          <p>{blockchain.account ? blockchain.account : "Not connected"}</p>
          <p>{publicMint < 1 && "You can mint 1 NFT for free"}</p>
          {error && <p>You are not in whiteList</p>}
        </div>
      </Modal>
    </div>
  );
};

{
  /* {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <>
                  <a
                    className="whitepaper mint"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect
                  </a>
                </>
              ) : (
                <a className="whitepaper mint" onClick={handleOpen}>
                  Mint
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <div className="mint__modal">
          <h3>
            {data.salePaused == false && data.publicSale == true
              ? "Public Sale"
              : data.whiteListSale == true
              ? "Whitelist Sale"
              : "Sale Not started yet"}
          </h3>
          <p>
            {(data.salePaused == true && data.publicSale == false) ||
            data.whiteListSale == false
              ? "sale not started"
              : "Sale started"}
          </p>
          <p>10,000 NFTs</p>
          <div className="balance modal__flex">
            <h5>Total Supply</h5>
            <p>{data.totalSupply}</p>
          </div>
          <hr />
          <div className="amount modal__flex">
            <h5>Amount</h5>
            <div className="amount__buttons">
              <img src={Minus} onClick={decrementMintAmount} alt="" />
              <h5>{mintAmount}</h5>
              <img src={Plus} onClick={incrementMintAmount} alt="" />
            </div>
            <a className="whitepaper">Max</a>
          </div>
          <hr />
          <div className="total modal__flex">
            <h5>Total</h5>
            {console.log(data.publicCost)}
            <p>
              {data.publicSale == true && data.salePaused == false
                ? Web3.utils.fromWei(String(data.publicCost), "ether") *
                  mintAmount
                : data.whiteListSale == true &&
                  Web3.utils.fromWei(String(data.whiteListCost), "ether") *
                    mintAmount}{" "}
              ETH
            </p>
          </div>
          <hr />
          <button
            onClick={
              data.salePaused == false && data.publicSale == true
                ? mint
                : data.whiteListSale == true && whitelistMint
            }
            disabled={error || pending ? true : false}
          >
            {pending === true ? "...PENDING" : "MINT"}
          </button>
          <p>{blockchain.account ? blockchain.account : "Not connected"}</p>
          {error && <p>You are not in whiteList</p>}
        </div>
      </Modal>
    </div>
  );
}; */
}
