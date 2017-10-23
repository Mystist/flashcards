import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Deck from './Deck'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.title
  })

  addCard = () => {
    console.log('sss');
  }

  startQuiz = () => {
    console.log('bbb');
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
        <Deck deck={this.props.navigation.state.params.deck} />

        <TouchableOpacity style={{ margin: 16, backgroundColor: 'white', height: 30, width: 80}} onPress={this.addCard}>
          <Text style={{ padding: 8, color: 'black' }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 4, backgroundColor: 'goldenrod', height: 30, width: 80}} onPress={this.startQuiz}>
          <Text style={{ padding: 6 }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetail
