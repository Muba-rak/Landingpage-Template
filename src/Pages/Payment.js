import React from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Paymentdetails from '../Components/Paymentdetails'



const Payment = () => {
  return (
    <div className='payment'>
        <Navbar bg="light" expand="lg" className='header'>
      <Container>
        <Navbar.Brand > <Link to='/'> <img src={Logo} alt= 'logo' /> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header_right">
            <Nav.Link > <Link to= '' style={{ textDecoration: 'none' }}><h4>Upload Docs</h4></Link> </Nav.Link>
            <Nav.Link >  <Link to= '' style={{ textDecoration: 'none' }}><h4>Name</h4></Link></Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
        </Navbar>
        <Paymentdetails />
        <Footer />
        
        
    </div>
  )
}

export default Payment