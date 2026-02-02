import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Firm Name */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold mb-0">Digital Tech Eye</h5>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a href="mailto:digitaltecheye@gmail.com" className="text-light text-decoration-none">
                digitaltecheye@gmail.com
              </a>
            </p>
            <p className="mb-0">
              <strong>Mobile:</strong>{" "}
              <a href="tel:9660127633" className="text-light text-decoration-none">
                9660127633
              </a>
            </p>
          </Col>

          {/* Rights Reserved */}
          <Col md={4}>
            <p className="mb-0">&copy; {new Date().getFullYear()} Digital Tech Eye. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
