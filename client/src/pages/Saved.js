import React, { useState } from 'react'
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/index';
import Book from '../components/Book/index';
import Card from '../components/Card/index';
import Form from '../components/Form/index';
import { List } from '../components/List/index';
import Footer from '../components/Footer/index';
import { Row, Container, Col } from '../components/Grid/index';


export default function Saved() {
  return (
    <div>
      <Container fluid={'fluid'}>
        <Row>
          <Col size={'12'}>
            <Jumbotron>
              <h1>View Your Saved Books Below</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size ={'12'}>
          <Card title="Saved Books">
            <List>
              {

              }
            </List>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
