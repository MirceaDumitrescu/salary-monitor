import * as React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/homepage.scss";

export interface IAppProps {}

export function Footer(props: IAppProps) {
  return (
    <div className="footer">
      <Nav
        className="row justify-content-md-center text-center"
        activeKey="/home"
      >
        <Nav.Item className="col-lg-2">
          <Link to="/about" className="footer-navlink">
            About
          </Link>
        </Nav.Item>
        <Nav.Item className="col-lg-2">
          <Link to="/" className="footer-navlink">
            Shifts
          </Link>
        </Nav.Item>
        <Nav.Item className="col-lg-2">
          <Link to="/add-shift" className="footer-navlink">
            Add Shift
          </Link>
        </Nav.Item>
      </Nav>
      <div className="copyright text-center p-4">
        <p className="text-secondary">Dumitrescu Mircea 2021</p>
      </div>
    </div>
  );
}
