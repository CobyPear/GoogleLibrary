import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{props.value.title}</h3>
          {props.value.subtitle && <h5 className="font-italic">{props.value.subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={props.value.link}>
              View
            </a>
            <button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {props.value.authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={props.value.image} alt={props.value.title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{props.value.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
