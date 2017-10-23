import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

const initialState = {
  current: 0,
  corrects: [],
  hasDone: false,
  isShowAnswer: false,
}

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz'
  })

  state = {
    ...initialState,
  }

  guess = (what, question, deck) => {
    if (what === 'correct') {
      this.setState({ corrects: this.state.corrects.concat(question) })
    }

    if (this.state.current + 1 >= deck.questions.length) {
      this.setState({ hasDone: true })

      clearLocalNotification()
        .then(setLocalNotification)
    }

    this.setState({ current: ++this.state.current, isShowAnswer: false })
  }

  quizAgain = () => {
    this.setState({ ...initialState })
  }

  back = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const { current, isShowAnswer, hasDone, corrects } = this.state

    const question = deck.questions[current]

    return (
      <View style={{flex: 1, padding: 20}}>
        {!hasDone ?
          <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{marginBottom: 4}}>{current + 1} / {deck.questions.length}</Text>

            {isShowAnswer ?
              <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={{margin: 12, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{question.answer}</Text>
                <TouchableOpacity style={{ margin: 6, height: 30, width: 80}} onPress={() => this.setState({ isShowAnswer: false })}>
                  <Text style={{ textAlign: 'center', padding: 6, color: 'red', textAlign: 'center' }}>Question</Text>
                </TouchableOpacity>
              </View> :
              <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={{margin: 12, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{question.question}</Text>
                <TouchableOpacity style={{ margin: 6, height: 30, width: 80}} onPress={() => this.setState({ isShowAnswer: true })}>
                  <Text style={{ textAlign: 'center', padding: 6, color: 'red', textAlign: 'center' }}>Answer</Text>
                </TouchableOpacity>
              </View>
            }

            <View style={{flex: 4, justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity style={{ margin: 16, backgroundColor: 'green', height: 30, width: 80}} onPress={() => this.guess('correct', question, deck)}>
                <Text style={{ textAlign: 'center', padding: 6, color: 'white' }}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 4, backgroundColor: 'red', height: 30, width: 80}} onPress={() => this.guess('incorrect', question, deck)}>
                <Text style={{ textAlign: 'center', padding: 6, color: 'white' }}>InCorrect</Text>
              </TouchableOpacity>
            </View>
          </View> :
          <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
            <Text style={{margin: 12, fontSize: 22 }}>SCORE: </Text>
            <Text style={{margin: 12, fontSize: 22, fontWeight: 'bold', color: 'goldenrod' }}>{(corrects.length / deck.questions.length).toFixed(2) * 100}</Text>

            <TouchableOpacity style={{ margin: 16, backgroundColor: 'green', height: 30, width: 100}} onPress={this.quizAgain}>
              <Text style={{ textAlign: 'center', padding: 6, color: 'white' }}>Quiz Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 12, backgroundColor: 'white', height: 30, width: 100}} onPress={this.back}>
              <Text style={{ textAlign: 'center', padding: 6, color: 'black' }}>Back</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

export default Quiz
