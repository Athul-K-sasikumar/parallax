import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const Foot = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
           
            <p>
              We offer a wide range of high-quality bikes for every kind of rider. Whether you're looking for mountain bikes, road bikes, or electric bikes, we have something for everyone.
            </p>
          </Col>
          <Col md={4}>
            
            <ul className="list-unstyled">
              <li>Email: support@bikeshop.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Bike Street, City, Country</li>
            </ul>
          </Col>
          <Col md={4}>
            
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Facebook</a></li>
              <li><a href="#" className="text-light">Instagram</a></li>
              <li><a href="#" className="text-light">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 BikeShop. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Foot