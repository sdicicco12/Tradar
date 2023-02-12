import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to tRadar</h1>
        <p>Here you can keep track of your investments, analyze the trades you've made, and see how you could have traded better!</p>
        <Container>
            <Row>
                <Col>
                    <div style={{ border: "1px solid gray", padding: "10px" }}>
                        This is a box
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Button variant="primary" block>
                        Analyze a trade
                    </Button>
                </Col>
                <Col md={4}>
                    <Button variant="secondary" block>
                        Check portfolio
                    </Button>
                </Col>
                <Col md={4}>
                    <Button variant="success" block>
                        Find ideas
                    </Button>
                </Col>
            </Row>
        </Container>
      </div>
    )}
}
