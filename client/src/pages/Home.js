import React, { useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/index';
import Book from '../components/Book/index';
import Card from '../components/Card/index';
import Form from '../components/Form/index';
import { List } from '../components/List/index';
import Footer from '../components/Footer/index';
import { Row, Container, Col } from '../components/Grid/index';

export default function Home() {
  const [state, setState] = useState({
    search: '',
    results: [],
    error: ''
  });

  // useEffect(() => {

  // }, [])

  const getBooks = () => {
    API.getBooks(state.search)
      .then(res => {
        const mapped = res.data.map(x => ({
          title: x.volumeInfo.title,
          subTitle: x.volumeInfo.subTitle,
          authors: x.volumeInfo.authors.join(', '),
          link: x.volumeInfo.infoLink,
          description: x.volumeInfo.description,
          image: x.volumeInfo.imageLinks.thumbnail,
          googleId: x.id
        }));

        console.log("res.data", res.data)
        console.log("mapped ", mapped)
        setState(state => ({
          ...state,
          results: mapped,
        }));

      })
      .catch(err => {
        setState(state => ({
          ...state,
          results: [],
          error: err
        }));
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getBooks();
  };

  const handleInputChange = ({ target: { value } }) => {
    setState(state => ({
      ...state,
      search: value
    }))
  };

  const saveBook = id => {
    const newSave = state.results.find(x => x.googleId === id)
    API.saveBook(newSave)
      .then(getBooks())
  };


  return (
    <div>
      {console.log(state)}
      <Container fluid={'fluid'}>
        <Jumbotron>
          <h1>Welcome To Your Library</h1>
        </Jumbotron>
        <Row>
          <Col size={"12"}>
            <Card title="Search">
              <Form
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Card title="Results">
          <List>
            {
              state.results.map((x) => (
                <Book key={x.googleId}
                  value={x}
                  Button={() => (
                    <button
                      onClick={() => saveBook(x.googleId)}
                      className="btn btn-primary ml-2"
                    >
                      Save
                    </button>
                  )}

                />
              ))}
          </List>
        </Card>
        <Footer />
      </Container>

    </div>
  )
}

