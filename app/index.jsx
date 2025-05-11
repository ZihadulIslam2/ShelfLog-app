import { StyleSheet, Text } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'

const Index = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero
        cum praesentium! Aliquam facilis voluptates nobis necessitatibus tempora
        ratione eius culpa mollitia molestiae, laboriosam eveniet quaerat
        repellat consectetur dignissimos adipisci?
      </Text>
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
})
