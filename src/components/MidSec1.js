import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MidSec1.css';

function MidSection() {
  return (
    <Container>
        <section className='react'>
            <section className='data'>
                <div className='m'>
                    <div className='n'>
                        <section className='c' data-padding="none">
                            <div className='r'>
                                <div className='e'>
                                    <h1 className='title'><b>.com Domains</b></h1>
                                    <h2 className='h3 textHeading h11kezvx' >
                                        <span className='fg'>Bring your business 
                                        <br/>
                                        online with a .com.</span>
                                    </h2>
                                    <br/>
                                    <br/>
                                    <div>
                                        <span>
                                            <p>
                                                <span>
                                                    <span className='title2'>
                                                        <b>
                                                        As low as
                                                        <span class="no-wrap-text">‪ ₹ 499.00*‬</span>
                                                        /1st year.
                                                        </b>
                                                    </span>
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <div className='button'>
                                                <span className='button2'>Find Yor domain
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                
                                <p className='msg'>
                                Prices are shown for first year only. Limit 1 per customer. Other <br/>
                                discounts available. See cart for final pricing.
                                </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>


        <section>
            <Container>
            <div className='Mid1'>
                <span><h1><b>More tools to grow your business.</b></h1></span>
                <p><b>We’re known for domains, but check out other essentials to take your business further online</b></p>
            </div>
            </Container>
        </section>


        <Container>
            <Row>
                {/* <div className='Mid2'> */}
                    <Col md={6}>
                        <div className='img1'>
                            <img src='https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/ab846ae2-31b0-47d4-9dd4-26fcf51b8d2d/en-img-brand-lander-professional-email.jpg' width="610px"></img>
                        </div>
                        <div className='pro'>
                            <h2>Professional Email</h2>
                                <p>Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</p>
                                    <p>As low as
                                    <br/>
                                    <br/>
                                    <b>₹ 29.00</b> per user/mo
                                </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='img2'>
                            <img src='https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/All/1c37e998-bc9e-41df-b201-ff16cb8191d3/en-img-brand-lander-web-hosting.jpg' width="610px"></img>
                        </div>
                        <div className='pro2'>
                            <h2>Web Hosting</h2>
                                <p>Whether you want hosting for one or 100 websites, we’ve got plans to keep everything running in peak form.</p>
                                    <p>As low as
                                    <br/>
                                    <br/>
                                    <b>₹ 119.00</b> per user/mo
                                </p>
                        </div>
                    </Col>
                {/* </div> */}
            </Row>
        </Container>
    </Container>
  );
}

export default MidSection;
