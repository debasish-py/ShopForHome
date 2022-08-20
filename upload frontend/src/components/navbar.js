import React from "react";
import "../styles/navbar.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collapse } from "react-bootstrap";

const Navbar = ({ setShow, size }) => {
  return (
    <Container>
      <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shop For Home
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
    </Container>
  );
};

export default Navbar;




