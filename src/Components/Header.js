import React from 'react'
import '../Style/Header.css'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <div >
      <Navbar bg="light" expand="lg" className='header'>
      <Container>
        <Navbar.Brand > <Link to='/'> <img src={Logo} alt= 'logo' /> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header_right">
            <Nav.Link > <Link to= '' style={{ textDecoration: 'none' }}><h4>Download package</h4></Link> </Nav.Link>
            <Nav.Link >  <Link to= '/login' style={{ textDecoration: 'none' }}><h4>Login</h4></Link></Nav.Link>
            <Nav.Link ><Link to= '/register' style={{ textDecoration: 'none' }}><h4>Register</h4></Link></Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>
  )
}

export default Header