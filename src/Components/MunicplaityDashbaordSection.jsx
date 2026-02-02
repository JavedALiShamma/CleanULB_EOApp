import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dashbaordPhoto from "../../src/assets/icons/DasboardPhoto.png"
import TrackNComplaint from "../../src/assets/icons/TrackNComplaint.png"
const MunicipalityDashboardSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Section Header */}
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold">Municipality Dashboard</h2>
            <p className="text-muted">
              A single, easy-to-use platform to monitor and manage cleanliness and municipal services.
            </p>
          </Col>
        </Row>

        {/* Image / Preview */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={dashbaordPhoto}
              alt="Municipality Dashboard Preview"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h4>What is the Municipality Dashboard?</h4>
            <p>
              The Municipality Dashboard is a centralized digital platform designed
              for Urban Local Bodies (ULBs) to track, monitor, and manage their
              city's cleanliness and essential municipal services in real-time.
            </p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="text-center mb-5">
          <h4 className="mb-4">Key Features</h4>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Real-time Monitoring</Card.Title>
                <Card.Text>
                  Track waste collection vehicles, bins, and public places with
                  live updates on cleanliness status.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Complaint Redressal</Card.Title>
                <Card.Text>
                  Receive, manage, and respond to citizen complaints directly from
                  the dashboard.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Analytics & Reports</Card.Title>
                <Card.Text>
                  Generate insightful reports and performance metrics to improve
                  cleanliness strategies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Cleanliness Monitoring Info */}
        <Row className="align-items-center">
          <Col md={6}>
            <h4>How Municipalities Can Monitor Cleanliness</h4>
            <ul>
              <li>View live status of waste collection vehicles and bins.</li>
              <li>Track public place cleanliness and toilet feedback in real-time.</li>
              <li>Receive alerts for unclean areas and pending complaints.</li>
              <li>Analyze cleanliness trends to plan effective operations.</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src={TrackNComplaint}
              alt="Cleanliness Monitoring"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MunicipalityDashboardSection;
