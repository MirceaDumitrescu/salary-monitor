import * as React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/homepage.scss";

export interface IAppProps {}

export function NavbarMenu(props: IAppProps) {
  return (
    <div>
      <Navbar className="navbar-body" bg="light" expand={"md"}>
        <Container className="web-navbar">
          <Navbar.Brand>Slaver.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" className="navlink">
                ABOUT
              </Link>
              <Link to="/" className="navlink">
                SHIFTS
              </Link>
              <Link to="/add-shift" className="navlink">
                ADD SHIFT
              </Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Username
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/edit-profile" className="navlink">
                    Edit profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="navlink">
                  Logout
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/login" className="navlink">
                    Login
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
        <Container fluid className="mobile-navbar">
          <Navbar.Brand>Slaver.</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Slaver.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/about" className="mobile-navlink navlink">
                  ABOUT
                </Link>
                <Link to="/" className="mobile-navlink navlink">
                  SHIFTS
                </Link>
                <Link to="/add-shift" className="mobile-navlink navlink">
                  ADD SHIFT
                </Link>
                <NavDropdown title="User profile" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item className="username-menu">
                    Hello Username
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="navlink" to="/login">
                      Login
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="navlink" to="/login">
                      Edit Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
