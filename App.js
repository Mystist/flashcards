import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import reducer from './reducers'

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => <Ionicons name='ios-list' size={30} color='goldenrod' />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'AddDeck',
      tabBarIcon: () => <Ionicons name='ios-add' size={30} color='goldenrod' />
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor='goldenrod' barStyle='light-content' />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
