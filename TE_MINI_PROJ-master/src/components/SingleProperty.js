import React from "react";
import { Container, Row, Col, Card, Button, ListGroup, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import img1 from "../pictures/house-1.jpg";
import img2 from "../pictures/house-2.jpg";
import img3 from "../pictures/house-3.jpg";
import "./SingleProperty.css";

const SingleProperty = () => {
  const { id } = useParams(); // Property ID from URL

  const handleWhatsAppContact = () => {
    const phoneNumber = '9769598652'; // Agent's phone number
    const message = encodeURIComponent('Hi, I am interested in your property listing!');
    const url = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleEmailVisit = () => {
    const agentEmail = 'johndoe@example.com';
    const subject = encodeURIComponent('Schedule a Visit - Luxury Apartment in New York');
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in scheduling a visit for the Luxury Apartment in New York.\nPlease let me know your availability.\n\nThank you.`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${agentEmail}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="property-page">
      <Container className="py-5">
        <Row className="g-4">
          {/* Left Side - Property Details */}
          <Col md={8}>
            <Card className="shadow-lg border-0">
              {/* Carousel for property images */}
              <Carousel fade>
                <Carousel.Item>
                  <img className="d-block w-100" src={img1} alt="Property Image 1" style={{ height: "400px", objectFit: "cover" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img2} alt="Property Image 2" style={{ height: "400px", objectFit: "cover" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img3} alt="Property Image 3" style={{ height: "400px", objectFit: "cover" }} />
                </Carousel.Item>
              </Carousel>

              <Card.Body>
                <Card.Title className="fw-bold fs-4">
                  Luxury Apartment in New York
                </Card.Title>
                <Card.Text className="text-muted">
                  Spacious 3BHK apartment with modern amenities, located in the heart of New York City.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Price:</strong>{" "}
                    <span className="text-success fs-5 fw-bold">$450,000</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Location:</strong> New York, USA
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Bedrooms:</strong> 3
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Bathrooms:</strong> 2
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Area:</strong> 1500 sqft
                  </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="primary"
                  className="mt-4 w-100 shadow-sm"
                  onClick={handleEmailVisit}
                >
                  Schedule a Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Side - Contact Agent */}
          <Col md={4}>
            <Card className="shadow-lg border-0 agent-card">
              <Card.Body>
                <Card.Title className="fw-bold fs-4 text-center">
                  Contact Agent
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Name:</strong> John Doe
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Email:</strong> johndoe@example.com
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Phone:</strong> +1 234 567 890
                  </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="success"
                  className="mt-3 w-100 shadow-sm"
                  onClick={handleWhatsAppContact}
                >
                  Contact Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProperty;
