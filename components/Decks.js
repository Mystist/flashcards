import React, { Component } from 'react'

import * as Styles from './Styles'
import { initDecks, getDecks } from '../utils/api'

function Deck({ deck }) {
  return (
    <Styles.ListItem>
      <Styles.Heading>{deck.title}</Styles.Heading>
      <Styles.Paragraph>3 cards</Styles.Paragraph>
    </Styles.ListItem>
  )
}

class Decks extends Component {
  state = {
    decks: null
  }
  componentDidMount() {
    getDecks()
      .then(decks => {
        decks === null ? initDecks() : this.setState({ decks })
      })
  }
  render() {
    return (
      <Styles.Container>
        {this.state.decks && Object.keys(this.state.decks).map(key => (
          <Deck key={key} deck={this.state.decks[key]} />
        ))}
      </Styles.Container>
    )
  }
}

export default Decks
