import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import Home from '../../pages/Home'
import "./style.css";

function Book({value, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{value.title}</h3>
          {value.subtitle && <h5 className="font-italic">{value.subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={value.link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {value.authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={value.image} alt={value.title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{value.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
