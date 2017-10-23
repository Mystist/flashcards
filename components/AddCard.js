import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    const { deck } = this.props.navigation.state.params
    const { question, answer } = this.state
    const card = { question, answer }

    addCardToDeck(deck, card)
      .then(() => {
        this.props.dispatch(addCard({
          [deck.title]: {
            ...deck,
            questions: deck.questions.concat(card)
          }
        }))
        this.props.navigation.goBack()
      })
  }

  render() {
    return (
      <View style={{margin: 30}}>
        <Text style={{margin: 8, fontSize: 22, fontWeight: 'bold' }}>Please enter Question:</Text>
        <TextInput
          style={{margin: 8, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text style={{ margin: 8, fontSize: 22, fontWeight: 'bold' }}>Please enter Answer:</Text>
        <TextInput
          style={{margin: 8, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity style={{margin: 8, backgroundColor: 'goldenrod', height: 30, width: 80}} onPress={this.submit}>
          <Text style={{ padding: 12 }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(AddCard)
