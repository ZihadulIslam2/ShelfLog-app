import { StyleSheet } from 'react-native'
import React from 'react'

import ThemedView from '@/components/ThemedView'
import ThemedText from '../components/ThemedText';
import ThemedLogo from '../components/ThemedLogo';

const Index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo/>
      <ThemedText style={styles.text} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero
        cum praesentium! Aliquam facilis voluptates nobis necessitatibus tempora
        ratione eius culpa mollitia molestiae, laboriosam eveniet quaerat
        repellat consectetur dignissimos adipisci?
      </ThemedText>
    </ThemedView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center'
  }
})
