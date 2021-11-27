import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/about.scss";

export interface IAppProps {}

export function About(props: IAppProps) {
  return (
    <div className="about-container">
      <div className="about">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="description">
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            mollitia vitae aliquid amet voluptatem dolores suscipit adipisci!
            Voluptatem, saepe vero magnam beatae mollitia asperiores velit
            fugiat, praesentium natus aliquid architecto? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officia, magnam? Et tempore,
            expedita deleniti quidem itaque velit. Modi tempore cum debitis,
            reprehenderit consequuntur libero numquam, rem repudiandae, sunt
            ducimus sint.
          </p>
          <div className="more-about">
            <h3 className="tools-title">Tools used:</h3>
            <i className="fab fa-react"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-sass"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-bootstrap"></i>
          </div>
        </div>
      </div>

      <section className="features">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="feature1.jpg" />
          <Card.Body>
            <Card.Title>User Creation/Storage</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Link to="/login" className="text-white">
                Go somewhere
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="feature1.jpg" />
          <Card.Body>
            <Card.Title>Shift Manipulation</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Link to="/add-shift" className="text-white">
                Go somewhere
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="feature1.jpg" />
          <Card.Body>
            <Card.Title>Password Management</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Link to="/forgot-password" className="text-white">
                Go somewhere
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="feature1.jpg" />
          <Card.Body>
            <Card.Title>Responsive Design</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Link to="/" className="text-white">
                Go somewhere
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}
