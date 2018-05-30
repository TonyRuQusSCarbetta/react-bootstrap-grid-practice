import React, {Component} from 'react'
import '../Styles/Header.css';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
// ------------------------------------------------------------------
export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this);
  }

  render () {
    return (
      <Container fluid={true} className="bg-dark animated zoomIn">
      <Row>
        <Col md="12">
        <p className="float-left pt-2 text-light hvr-grow">Carbetta Coding<i class="fab fa-github pl-1"></i></p>
        <Nav className="float-right">
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
        </Col>
      </Row>
      </Container>
    )
  }
}
