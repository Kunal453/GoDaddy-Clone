import React from 'react'
import { Link } from "react-router-dom";
// import img1 from './images/imga1.jpg'
import './God.css';
import Navbar2 from './Navbar2';
import MidSec1 from './MidSec1';
import { Nav, Container, Col, Row, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {FaShoppingCart} from 'react-icons/fa'
import MidSec2 from './MidSec2';
import Footer from './Footer';




function Navbar1() {
  return (
    <>

      <Container>
        <Row>
          <Col>
            <Navbar fixed='top' bg='white' expand='sm' className='re'>
              <Container>
                <Navbar.Brand href='#'>
                  <img src='https://domaininvesting.com/wp-content/uploads/2020/01/GoDaddy-Black.png' height='60px' width='205px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='my-nav' />
                <Navbar.Collapse id='my-nav'>
                  <Nav className='me-auto fw-bold' >

                    <NavDropdown title='Domains' id='my-nav' >
                      <div className='Dom'>
                        <div className='d1'>
                          <NavDropdown.Header><b>Domains Names</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>Domain Name Search</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Privacy & Protection for Domains</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>WHOIS </NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Auctions for Domain Names</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Appraise Domain Name Value</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Investing in Domain Names</NavDropdown.Item>
                        </div>

                        <div className='d2'>
                          <img src='https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg' width="380px" height="180px"></img>
                          <a href='https://www.godaddy.com/en-in/domains/domain-transfer' target='#'><center>Transfer Your Domain</center></a>
                        </div>
                      </div>
                    </NavDropdown>

                    <NavDropdown title='Hosting' id='my-nav' >
                      <NavDropdown.Header><b>Hosting</b></NavDropdown.Header>

                      <NavDropdown.Item hreg='#'>Web Hosting</NavDropdown.Item>
                      <NavDropdown.Item hreg='#'>Web Hosting Plus</NavDropdown.Item>
                      <NavDropdown.Item hreg='#'>GoDaddy Website Builder </NavDropdown.Item>
                      <NavDropdown.Item hreg='#'>All Hosting Options</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title='Security' id='my-nav' align='centre' >
                      <div className='Secure'>
                        <div className='s1'>
                          <NavDropdown.Header><b>SSL Certificates</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>DV SSL Certificate</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'> EV SSL Certificate</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>SAN SSL Certificate</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Wildcard SSL Certificate</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Managed SSL Certificate</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>All SSL Certificate Options </NavDropdown.Item>
                        </div>
                        <div className='s2'>
                          <NavDropdown.Header><b>Web Security</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>Backups</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>Complete Website Security</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'>All Web Security Options</NavDropdown.Item>
                        </div>
                        <div className='s3'>
                          <img src='https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg' width="380px" height="180px"></img>
                          <a href='#' target='blank'>Get help selecting the right type of SSL Certificate</a>
                        </div>
                      </div>
                    </NavDropdown>

                    <NavDropdown title='Email & Marketing' id='my-nav' align='centre'>
                      <div className='Email'>
                        <div className='e1'>
                          <NavDropdown.Header><b>Email & Office</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>Professional Business Email</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'> All Email Options</NavDropdown.Item>
                        </div>
                        <div className='e2'>
                          <NavDropdown.Header><b>Marketing Tools</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>Digital Marketing Suite</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'> Content & Photo Creator</NavDropdown.Item>
                          <NavDropdown.Item hreg='#'> All Marketing Options</NavDropdown.Item>
                        </div>
                        <div className='e3'>
                          <img src='https://media.istockphoto.com/id/1226994628/photo/at-home.jpg?s=612x612&w=0&k=20&c=V79uT9chl919YcYCDAhBBt4Ytq7HJyFUf_ICok4IWSw=' width="380px" height="180px"></img>
                          <a href='#' target='blank' >Tools to help your small business clients get bigger</a>
                        </div>
                      </div>
                    </NavDropdown>
                    <NavDropdown title="For Web Professional" id=" my-nav" align="centre">
                      <div className='f1'>
                        <div className='f2'>
                          <NavDropdown.Header><b>Welcome To GoDaddy Pro</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'>Do more for clients with GoDaddy <br/>Pro, our ever-growing set of products, tools, content and support tailored <br/>to the unique business needs of web designers and developers.</NavDropdown.Item>
                        </div>
                      </div>
                    </NavDropdown>


                  </Nav>
                  <Navbar.Text>
                    <NavDropdown title='040-49187600' id='my-nav' className='n1'>
                      <div className='number'>
                        <div className='n2'>
                          <NavDropdown.Header><b>Call Us</b></NavDropdown.Header>
                          <NavDropdown.Item href='#'><b>040-49187600</b> </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Header><b>Global Directory</b></NavDropdown.Header>
                          <NavDropdown.Item hreg='#'><b>Phone numbers and hours</b></NavDropdown.Item>
                        </div>
                      </div>
                    </NavDropdown>
                  </Navbar.Text>

                  <Navbar.Text>
                    <div className='hr1'>
                      <NavLink href='#'>Help</NavLink>
                    </div>
                  </Navbar.Text>

                  <Navbar.Text>
                    <NavDropdown title='Sign-in' id='my-nav' className='si1'>
                      <div className='number'>
                        <div className='si2'>
                          <NavDropdown.Header><b>Register User</b></NavDropdown.Header>
                          <NavDropdown.Item href='#' to='./login'><b>
                              <Link to="/login">Login</Link>
                            </b> </NavDropdown.Item>
                          <NavDropdown.Divider />
                          {/* <NavDropdown.Header><b>
                          <Link to="/register">New Customer</Link>
                            </b></NavDropdown.Header> */}
                          {/* <NavDropdown.Item href='#' to='./register'><b><u>Create An Account</u></b></NavDropdown.Item> */}
                        </div>
                      </div>
                    </NavDropdown>
                  </Navbar.Text>
                  <Navbar.Text>
                      <div className='Shop'>
                        <FaShoppingCart className='icons cart'>
                      </FaShoppingCart>
                      </div>
                  </Navbar.Text>

                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
     
      </Container>
      <Navbar2 />
      <MidSec1/>
      <MidSec2/>
      <Footer/>
    </>
  )
}

export default Navbar1
















