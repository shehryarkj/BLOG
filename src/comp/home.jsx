import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      
      <header className="masthead" style={{ backgroundImage: 'url("src/comp/home-bg.jpg")' }}>
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
        <Container className="position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading"></span>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <Container>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#!">Start Bootstrap</a> on September 24, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
              </a>
              <p className="post-meta">
                Posted by <a href="#!">Start Bootstrap</a> on September 18, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Science has not yet mastered prophecy</h2>
                <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#!">Start Bootstrap</a> on August 24, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
              </a>
              <p className="post-meta">
                Posted by <a href="#!">Start Bootstrap</a> on July 8, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
            </div>
          </div>
        </div>
      </Container>
      <footer className="border-top">
        <Container className="px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
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
              <div className="small text-center text-muted fst-italic">Copyright &copy; $herry's Website 2023</div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Home;
