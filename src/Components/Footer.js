import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/Footer.css';
import '../Styles/hover.css';
import Header from '../Components/Header.js'

// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this)
  }
// -----------------------------------------------------------------------------
  render() {
    return (

      <Container fluid={true} className="bg-warning animated bounce">
      <Row className="flex-container">
        <Col md="12">
        <img src="img/CarbettaCoding-Logo.png" alt="Logo" className="img-fluid hvr-grow"/>
        </Col>
      </Row>
      </Container>
    )
  }
}

// -----------------------------------------------------------------------------
export default App;
