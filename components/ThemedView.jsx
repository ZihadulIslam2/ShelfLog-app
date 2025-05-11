import { Colors } from '@/constants/Colors'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ThemedView = () => {
  // check the system theme model
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const insert = SafeAreaView()
  return (
    <View
      style={[
        {
          backgroundColor: theme.backgroundColor,
          paddingTop: insert.top,
          paddingBottom: insert.bottom,
        },
        style,
      ]}
      {...props}
    />
  )
}

export default ThemedView
