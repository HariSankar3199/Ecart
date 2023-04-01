import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom"; 
//redux
import { useSelector } from "react-redux"; // to add features to acrt button

const NavbarComp = () => {

  //redux  we get a state of handlecart
  const state= useSelector((state)=>state.handleCart) //!=>redux->reducer->handlecart
  //
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">
            LA COLLECTION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              {/* Link is used to prevent reload that set the state to initial value on every redirection */}
              <Link to="/" style={{textDecoration:'none'}}> <Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/products" style={{textDecoration:'none'}}> <Nav.Link href="/about">Products</Nav.Link></Link>
              <Link to="/about" style={{textDecoration:'none'}}> <Nav.Link href="/about">About</Nav.Link></Link>
              <Link to="/contact" style={{textDecoration:'none'}}> <Nav.Link href="/contact">Contact</Nav.Link></Link> 
            
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

            <Button
              href="/login"
              variant="outline-dark ms-2 me-2"
              onClick={() => console.log("Dark")}
            >
              <i className="fa fa-sign-in" aria-hidden="true">
                Login
              </i>
            </Button>
            <Button
              href="/register"
              variant="outline-dark ms-2 me-2"
              onClick={() => console.log("Dark")}
            >
              <i className="fa fa-user-plus " aria-hidden="true">
                Register
              </i>
            </Button>
            <Link  to='/cart'>
            <Button
              variant="outline-dark ms-2 me-2"
            >
              <i className="fa fa-shopping-cart " aria-hidden="true">
                Cart ({state.length}) 
                {/* //! redux editted */}
              </i>
            </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
