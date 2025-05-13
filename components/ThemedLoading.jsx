import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedLoading = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView>
      <ActivityIndicator size="size" color={theme.text} />
    </ThemedView>
  )
}

export default ThemedLoading
