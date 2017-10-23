import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { initDecks, getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Deck from './Deck'

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
      <ScrollView style={{flex: 1}}>
        {decks && Object.keys(decks).map(key => (
          <View key={key} style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: "100%", padding: 20}}>
            <Deck deck={decks[key]} navigation={this.props.navigation} />
          </View>
        ))}
      </ScrollView>
    )
  }
}

const mapStateToProps = (decks) => ({
  decks
})

export default connect(mapStateToProps)(Decks)
