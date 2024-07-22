import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './App.css';
import logo from './BMIlogo.png'

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiValue, setBmiValue] = useState("");
  const [status, setStatus] = useState('');

  const handleClick = () => {
    const heightMeter = height / 100; 
    const bmi = weight / (heightMeter * heightMeter);

    setBmiValue(bmi.toFixed(2)); 

    let bmiStatus = '';
    if (bmi < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Row className="justify-content-md-center w-100">
        <Col md={6}>
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h1 className="text-center mb-4">BMI Calculator</h1>
              <div className="text-center mb-4">
                <img
                  src={logo} 
                  alt="Fitness Setup"
                  className="fitness-img rounded"
                />
              </div>
              <Form>
                <Form.Group controlId="formHeight">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your height"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                  />
                </Form.Group>
                <Form.Group controlId="formWeight" className="mt-3">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your weight"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3 w-100" onClick={handleClick}>
                  Calculate
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {bmiValue && (
        <Row className="justify-content-md-center mt-4 w-100">
          <Col md={6}>
            <Alert variant="info" className="text-center">
              <Alert.Heading>Your BMI: {bmiValue}</Alert.Heading>
              <p>Your status: {status}</p>
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
