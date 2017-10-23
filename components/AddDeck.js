import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    text: ''
  }
  submit = () => {
    saveDeckTitle(this.state.text)

    this.props.dispatch(addDeck({
      [this.state.text]: {
        title: this.state.text
      }
    }))

    this.toHome()
    this.setState({ text: '' })
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 12, marginBottom: 32 }}>Please enter Deck name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity style={{ margin: 26, backgroundColor: 'goldenrod', height: 30, width: 80}} onPress={this.submit}>
          <Text style={{ padding: 6, textAlign: 'center'}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(AddDeck)
