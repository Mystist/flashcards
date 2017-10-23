import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'App:Decks'

export function initDecks() {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, '{}')
}

export function getDecks() {
  // AsyncStorage.clear()
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
}

export function getDeck() {
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
    }
  }))
}

export function addCardToDeck() {
}
