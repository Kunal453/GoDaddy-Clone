import React from 'react'
// import img1 from './images/imga1.jpg'
import './nav2.css'
import { Nav, Container, Col, Row,Form,Button, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'



function Navbar2() {
  return (
    <>
      <Container className='a'>
      <Navbar>
      <Container fluid>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find Your Perfect Domain"
              className="ms-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='b'>Search Domain</Button>
          </Form>
      </Container>
          <Navbar.Text>
                    <div className='t'>
                      <NavLink href='#'><b>.inc</b>₹81,966.39*</NavLink>
                    </div>
          </Navbar.Text>
          <Navbar.Text>
                    <div className='r'>
                      <NavLink href='#'><b>.in</b>₹49.00*</NavLink>
                    </div>
          </Navbar.Text>
          <Navbar.Text>
                    <div className='t'>
                      <NavLink href='#'><b>.US</b>₹163.11*</NavLink>
                    </div>
          </Navbar.Text>
          <Navbar.Text>
                    <div className='t'>
                      <div className='l'>
                      <NavLink href='#'><b>.Club</b>₹529.00*</NavLink>
                      </div>
                    </div>
          </Navbar.Text>

         </Navbar>
      </Container>
      
     
    </>
  )
}

export default Navbar2;
















