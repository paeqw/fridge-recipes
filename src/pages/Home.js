import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <Container className="rounded-container">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="display-4 mb-4">Welcome to Recipe Finder</h1>
            <p className="lead mb-4">Discover delicious recipes using ingredients you already have in your fridge!</p>
            <Button variant="primary"  size="lg"><Link to="/findrecipe" className="text-light text-decoration-none">Get Started</Link></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
