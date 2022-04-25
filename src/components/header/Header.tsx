import React from "react";
import { Navbar, Container, Image, Col } from "react-bootstrap";

const Index: React.FC = (): JSX.Element => {
  return (
    <Navbar className="layout-section" fixed="top">
      <Container className="header">
        <Navbar.Brand>
          <a href="/">
            <Col>
              <Image src="https://workmotion.com/wp-content/uploads/2021/12/logo-workmotion.svg" />
            </Col>
          </a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Index;
