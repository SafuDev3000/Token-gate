import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
    return (
        <section className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Cro Crooks Cryptic Content</p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4"> Own a Cronos NFT?<br /> Use it to Gain EXCLUSIVE ACCESS to PRIVATE CONTENT just for  <span className="text-primary font-weight-medium">CRONOS NFT HOLDERS</span></h1>
                            <p className="text-muted mb-4 pb-2">This website is mainly for Cro Crooks NFT Holders to enjoy the benefits of our Community and get EXCLUSIVE ACCESS to our features such as Redeeming Cro Crooks Merch, Participating in Voting/Governance, Burning $cGOLD and Private Staking!</p>
                            <a href="./signin" className="btn btn-warning">
                                LOG IN <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mt-5 mt-lg-0">
                            <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Hero;