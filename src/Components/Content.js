import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/Content.css';
import '../Styles/hover.css';
import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'

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

      <Container fluid={true} className="bg-dark">
       <Row className="flex-container">
         <Col md="6" className="content flex-container bg-warning border border-dark">
         <h1>col-md-6</h1>
         </Col>
         <Col md="6" className="content flex-container bg-warning border border-dark">
         <h1>col-md-6</h1>
         </Col>
      </Row>

      <Row className="flex-container">
        <Col md="3" className="content1 flex-container bg-primary border border-dark">
        <h1>col-md-3</h1>
        </Col>
        <Col md="3" className="content1 flex-container bg-primary border border-dark">
        <h1>col-md-3</h1>
        </Col>
        <Col md="3" className="content1 flex-container bg-primary border border-dark">
        <h1>col-md-3</h1>
        </Col>
        <Col md="3" className="content1 flex-container bg-primary border border-dark">
        <h1>col-md-3</h1>
        </Col>
     </Row>
     </Container>

    )
  }
}

// -----------------------------------------------------------------------------
export default App;
