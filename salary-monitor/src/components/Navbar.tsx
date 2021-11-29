import React, { useEffect } from "react";
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

export function NavbarMenu(props: any) {
  const [user, setUser] = React.useState("User profile");
  const [auth, setAuth] = React.useState(false);
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (storage) {
      setUser(storage);
      setAuth(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    setUser("User profile");
  };

  useEffect(() => {}, [props.Login]);
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
                {user}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link
                  to="/dashboard"
                  className="navlink m-2"
                  style={{ display: auth ? "" : "none" }}
                >
                  Edit profile
                </Link>
                <Link
                  to="/login"
                  className="navlink m-2"
                  onClick={logout}
                  style={{ display: auth ? "" : "none" }}
                >
                  Logout
                </Link>
                <Link
                  to="/login"
                  className="navlink m-2"
                  style={{ display: auth ? "none" : "" }}
                >
                  Login
                </Link>
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
                  <p className=" m-2">Hello Username</p>
                  <Link
                    className=" m-2"
                    to="/login"
                    style={{ display: auth ? "none" : "" }}
                  >
                    Login
                  </Link>
                  <Link
                    className=" m-2"
                    to="/dasboard
                  "
                    style={{ display: auth ? "" : "none" }}
                  >
                    Edit Profile
                  </Link>
                  <Link
                    className=" m-2"
                    to="/login"
                    onClick={logout}
                    style={{ display: auth ? "" : "none" }}
                  >
                    Logout
                  </Link>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
