import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/App.css';
import '../Styles/hover.css';
import Header from '../Components/Header.js'
import Content from '../Components/Content.js'
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

      <Container fluid={true}>
        <Header />
        <Content />
        <Footer />
      </Container>
    )
  }
}

// -----------------------------------------------------------------------------
export default App;
