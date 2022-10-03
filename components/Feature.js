import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
    return (
        <>
            {
                props.features.map((feature, key) =>
                    (feature.id % 2 !== 0) ?
                        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                            <Col md={5} >
                                <div>
                                    <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                                </div>
                            </Col>
                            <Col md={{ size: 6, offset: 1 }}>
                                <div className="mt-5 mt-sm-0 mb-4">
                                    <div className="my-4">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                                    <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
                                </div>
                            </Col>
                        </Row>
                        :
                        <Row key={key} className="align-items-center mt-5">
                            <Col md={6}>
                                <div className="mb-4">
                                    <div className="my-4">
                                        <i className="mdi mdi-account-group"></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                                    <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
                                </div>
                            </Col>
                            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                                <div>
                                    <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                                </div>
                            </Col>
                        </Row>
                )
            }
        </>
    );
}
const Feature = () => {
    const features = [
        { id: 1, img: "https://i.imgur.com/UYOizrU.png", title: "EXCLUSIVE PRODUCTS", desc: "Use your Cronos NFT to get REDEEM Exclusive 1 of a kind merchandise. For platforms, offer token gated products to your communities through our platform.", link: "/" },
        { id: 2, img: "https://i.imgur.com/wgIHVUa.png", title: "DIGITAL CONTENT", desc: "EXCLUSIVE CONTENT only for NFT Holders. We currently have a private trading channel in our discord which is an example of this. This website will expand upon those features if your a current Cronos Cro Crook NFT Holder.", link: "/" },
        { id: 3, img: "https://i.imgur.com/uH4AbNp.png", title: "MEMBERSHIP CLUBS", desc: "Your NFT acts as a membership card or access pass to the club or community. This will also be extended to IRL events and meetups.", link: "/" },
    ];
    return (
        <section className="section" id="feature">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
                            <p className="text-muted">Our website has many features and offer's many benefits to not only individuals but also other Cronos Platforms. We look to use Token Gating to Introduce Exclusive Products, Digital Content and Membership Clubs to our community and others. </p>
                        </div>
                    </Col>
                </Row>
                <FeatureBox features={features} />
            </Container>
        </section>
    );
}
export default Feature;