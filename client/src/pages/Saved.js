import React, { useState, useEffect } from 'react'
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/index';
import Book from '../components/Book/index';
import Card from '../components/Card/index';
import { List } from '../components/List/index';
import Footer from '../components/Footer/index';
import { Row, Container, Col } from '../components/Grid/index';


export default function Saved() {

  const [state, setState] = useState({
    library: [],
    error: ''
  })

  useEffect(() => {
    getSavedBooks();
  }, [])

  const getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        setState(state => ({
          ...state,
          library: res.data
        }));
      })
      .catch(err => {
        setState(state => ({
          ...state,
          error: err
        }));
      })
  };

  const deleteBook = id => {
    API.deleteBook(id)
      .then(res => getSavedBooks())
      .catch(err => {
        setState(state => ({
          ...state,
          error: err
        }));
      })
  }

  return (
    <div>
      <Container>
        <Row>
          <Col size={'md-12'}>
            <Jumbotron>
              <h1>View Your Saved Books Below</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size={'md-12'}>
            <Card title="Saved Books">
              <List>
                {
                  !state.library.length ? (
                    <h2 className='text-center'>No Books Saved</h2>
                  ) : (
                      state.library.map((x) => (
                        <Book
                          key={x._id}
                          value={x}
                          Button={() => (
                            <button
                              onClick={() => deleteBook(x._id)}
                              className="btn btn-danger ml-2"
                            >
                              Delete
                            </button>
                          )}
                        />
                      ))
                    )
                }
              </List>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  )
}
