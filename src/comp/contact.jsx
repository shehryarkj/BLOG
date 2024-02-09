import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '/public/img/contact-bg.jpg'
// import './App.css';
function Contact() {
  return (
    <>
      
      <header id='cnt' className="masthead" >
      <Navbar expand="lg" variant="light" bg="transparent" id="mainNav">
        <Container>
        <Navbar.Brand style={{fontSize:'30px'}} href="/">SHERRY'S BLOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive">
            Menu
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive">
            <Nav id='nv' className=" ms-auto py-4 py-lg-0 ">
            <Nav.Link>  <Link style={{color:'white'}} to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link style={{color:'white'}} to='/about'>About</Link></Nav.Link>
              <Nav.Link><Link style={{color:'white'}}>My Post</Link></Nav.Link>
              <Nav.Link ><Link style={{color:'white'}} to='/contact'>Contact</Link></Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container  className="position-relative px-4 px-lg-5">
          <div  className="row gx-4 gx-lg-5 justify-content-center">
            <div  className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>Contact Me</h1>
                <p >Ph. <b>+923118105762</b>   <br /> Email: <b >shehryarkj916@gmail.com</b> </p>
                <span className="subheading">Have questions? I have answers.</span>
              </div>
           
            </div>
          </div>
        </Container>
      </header>
      <main className="mb-4">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
              <div className="my-5">
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name..." required />
                    <Form.Control.Feedback type="invalid">A name is required.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email..." required />
                    <Form.Control.Feedback type="invalid">An email is required.</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Email is not valid.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number..." required />
                    <Form.Control.Feedback type="invalid">A phone number is required.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message here..." required />
                    <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled>Send</Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <footer className="border-top">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <FontAwesomeIcon icon={faTwitter} className="fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <FontAwesomeIcon icon={faGithub} className="fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Contact;
