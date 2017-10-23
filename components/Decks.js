import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Styles from './Styles'
import { initDecks, getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

function Deck({ deck }) {
  return (
    <Styles.ListItem>
      <Styles.Heading>{deck.title}</Styles.Heading>
      <Styles.Paragraph>3 cards</Styles.Paragraph>
    </Styles.ListItem>
  )
}

class Decks extends Component {
  componentDidMount() {
    getDecks()
      .then(decks => {
        decks === null ? initDecks() : this.props.dispatch(receiveDecks(decks))
      })
  }
  render() {
    const { decks } = this.props

    return (
      <Styles.Container>
        {decks && Object.keys(decks).map(key => (
          <Deck key={key} deck={decks[key]} />
        ))}
      </Styles.Container>
    )
  }
}

const mapStateToProps = (decks) => ({
  decks
})

export default connect(mapStateToProps)(Decks)
