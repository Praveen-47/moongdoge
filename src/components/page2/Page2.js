// import React, { useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import './Page2.css'
// import NFT1 from '../../assets/images/nft1.png'
// import NFT2 from '../../assets/images/nft2.png'
// import NFT3 from '../../assets/images/nft3.png'
// import NFT4 from '../../assets/images/nft4.png'
// import $ from 'jquery'

// export const Page2 = () => {
//     const [nftImg,setNftImg]= useState();
//     const [nftName,setNftName]= useState('');
//     const [nftId,setNftId]= useState('');

//     const moreDetailsHandler = (e) => {
//         const id = e.target.id;
//         const images = [...$(".image__container img")];
//         const img = images.find(e=>e.id === id);
//         const names = [...$(".image__container .image__text .name")];
//         const name = names.find(e=>e.id === id);
//         const NftIds = [...$(".image__container .image__text .id")];
//         const NftId = NftIds.find(e=>e.id === id);
//         setNftImg(img.src);
//         setNftName(name.innerHTML);
//         setNftId(NftId.innerHTML);
//         $(".single__image").addClass('show-more-details');
//         $(".backdrop").addClass('show-backdrop')
//     }

//     const cancelMoreDetailsHandler = ()=>{
//         $(".single__image").removeClass('show-more-details');
//         $(".backdrop").removeClass('show-backdrop')
//     }

//   return (
//     <div className="page__2">
//         <Container>
//             <Row>
//                 <Col md={3}>
//                     <div className="image__container" onClick={moreDetailsHandler} id="1">
//                         <img src={NFT1} alt="" width="100%" id="1"/>
//                         <div className="image__text">
//                             <p className="name" id="1">Thoth NFT 1</p>
//                             <p className="id" id="1">#231234</p>
//                         </div>
//                     </div>
//                 </Col>

//                 <Col md={3}>
//                     <div className="image__container" onClick={moreDetailsHandler} id="2">
//                         <img src={NFT2} alt="" width="100%" id="2"/>
//                         <div className="image__text">
//                             <p className="name" id="2">Thoth NFT 2</p>
//                             <p className="id" id="2">#345678</p>
//                         </div>
//                     </div>
//                 </Col>

//                 <Col md={3}>
//                     <div className="image__container" onClick={moreDetailsHandler} id="3">
//                         <img src={NFT3} alt="" width="100%" id="3"/>
//                         <div className="image__text">
//                             <p className="name" id="3">Thoth NFT 3</p>
//                             <p className="id" id="3">#435678</p>
//                         </div>
//                     </div>
//                 </Col>

//                 <Col md={3}>
//                     <div className="image__container" onClick={moreDetailsHandler} id="4">
//                         <img src={NFT4} alt="" width="100%" id="4"/>
//                         <div className="image__text">
//                             <p className="name" id="4">Thoth NFT 4</p>
//                             <p className="id" id="4">#790456</p>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//         <div className="backdrop" onClick={cancelMoreDetailsHandler}></div>
//         <div className="single__image">
//             <img src={nftImg} alt="" width="400px"/>
//             <div className="image__details">
//                 <table>
//                     <tr>
//                         <th>ID</th>
//                         <th>{nftId}</th>
//                     </tr>
//                     <tr>
//                         <th>NAME</th>
//                         <th>{nftName}</th>
//                     </tr>
//                 </table> 
//                 <a download={nftName} href={nftImg} className="whitepaper">Download</a> 
//             </div>
            
//         </div>
//     </div>
//   )
// }
