import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz'
  })

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
        <Text>2 / 2</Text>
        
        <Text style={{margin: 12, fontSize: 22, fontWeight: 'bold' }}>Does React Native work with Android?</Text>
        <TouchableOpacity style={{ margin: 6, height: 30, width: 80}} >
          <Text style={{ textAlign: 'center', padding: 6, color: 'red' }}>Answer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ margin: 16, backgroundColor: 'green', height: 30, width: 80}} >
          <Text style={{ textAlign: 'center', padding: 6, color: 'white' }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 4, backgroundColor: 'red', height: 30, width: 80}} >
          <Text style={{ textAlign: 'center', padding: 6, color: 'white' }}>InCorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Quiz
