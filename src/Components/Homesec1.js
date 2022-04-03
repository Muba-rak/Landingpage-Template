import React from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import '../Style/Homesec1.css'
import Sample from './Sample'
import Desktop from '../Images/desktop.png'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Homesec1 = () => {
  return (
    <div className='homesec1'>
        <header>
            <Navbar expand="lg" className=''>
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
        </header>
        <main>
            <div className='main'>
                <div className='main_1'>
                    <h2> Lörem Ipsum Posorade Syet Metrotism</h2>
                </div>
                <div className='main_2'>
                    <p>Lörem ipsum krobåsm parangen exobel när Facebookfest dirar plara disade podonat.</p>
                
                </div>
                <div className='main_3'>
                    <input type='text' placeHolder='Enter Email Address'  />
                    <Sample />
                </div>
                <div className='main_4'>
                    <img src={Desktop} alt='laptop' />

                </div>

               
            </div>
        </main>

    </div>
  )
}

export default Homesec1