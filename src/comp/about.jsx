import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function About(){

    return(
        <>
        
        <header className="masthead" style={{ backgroundImage: 'url("src/comp/about-bg.jpg")' }}>
        <Navbar expand="lg" variant="light" bg="transparent" id="mainNav">
        <Container>
        <Navbar.Brand style={{fontSize:'30px'}} href="/">SHERRY'S BLOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive">
            Menu
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive">
            <Nav id='nv' className="ms-auto py-4 py-lg-0">
            <Nav.Link>  <Link style={{color:'white'}} to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link style={{color:'white'}} to='/about'>About</Link></Nav.Link>
              <Nav.Link><Link style={{color:'white'}}>My Post</Link></Nav.Link>
              <Nav.Link ><Link style={{color:'white'}} to='/contact'>Contact</Link></Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container className="position-relative">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>I'M SHEHRYAR</h1>
                <span className="subheading">This is what I do.</span>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <main className="mb-4">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!
              </p>
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
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">
                Copyright © Your Website 2023
              </div>
            </div>
          </div>
        </Container>
      </footer>
        </>
    )
}
export default About;