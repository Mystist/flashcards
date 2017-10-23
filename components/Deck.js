import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

export const Heading = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 4px 0;
`

export const Paragraph = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #666;
`

export const ListItem = styled.View`
  padding: 6px 8px;
`

function Deck({ deck, navigation }) {
  return (
    <ListItem>
      <TouchableOpacity onPress={() => navigation ? navigation.navigate('DeckDetail', { deck }) : ''}>
        <Heading>{deck.title}</Heading>
        <Paragraph>3 cards</Paragraph>
      </TouchableOpacity>
    </ListItem>
  )
}

export default Deck
