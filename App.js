import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import reducer from './reducers'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'

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
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'AddDeck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    }
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'goldenrod'
  }
})

const Stacks = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  AddCard: {
    screen: AddCard,
  },
  Quiz: {
    screen: Quiz,
  },
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor='goldenrod' />
          <Stacks />
        </View>
      </Provider>
    )
  }
}
