import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href="/about">about page</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})