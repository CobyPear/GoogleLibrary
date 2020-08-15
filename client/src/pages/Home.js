import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/index'
import Book from '../components/Book/index'
import Card from '../components/Card/index'
import Form from '../components/Form/index'
import { List, ListItem } from '../components/List/index'
import Footer from '../components/Footer/index'

export default function Home() {
  const [state, setState] = useState({
    search: '',
    results: []
  })

  // useEffect(() => {

  // }, [])

  const handleFormSubmit = event => {
    event.preventDefault()
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
        }))
        console.log("res.data", res.data)
        console.log("mapped ", mapped)
        setState(state => ({
          ...state,
          results: mapped,
        }))
        console.log(state)
      })
      .catch(err => console.log(err))

  }

  // const handleInputChange = ({ target: { value } }) => {
  //   console.log(value)
  //   setState(state => ({
  //     ...state,
  //     search: value
  //   }))
  // }


  return (
    <div>
      {/* {console.log(state)}
      <Jumbotron>
        <h1>Welcome To Your Library</h1>
      </Jumbotron>
      <Card title="Search">
      <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      </Card>
      <Card title="Results">
        <List>
          { state.results.map.length ? (
              state.results.map((x, i) => <Book key={i} value={x} />)
          ) : (
            <h2>No Books Found</h2>
          )
          }
        </List>
      </Card>



      <Footer /> */}

    </div>
  )
}
