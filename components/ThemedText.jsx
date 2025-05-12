import { Text, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors'

const ThemedText = ({ style, title = false, ...props }) => {
  // get the theme of the system "dark" "light"
  const colorTheme = useColorScheme()
  // get the Color based on the theme
  const theme = Colors[colorTheme] ?? Colors.light

  // add 2 type of style title an text
  const textColor = title ? theme.title : theme.text

  return (
    <Text
      style={[
        {
          color: textColor,
        },
        style,
      ]}
      {...props}
    />
  )
}

export default ThemedText
