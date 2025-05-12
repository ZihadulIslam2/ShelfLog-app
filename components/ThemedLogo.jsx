import { Image, useColorScheme } from 'react-native'


// image imports
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = () => {
  // get the theme of the system "dark" "light"
  const colorTheme = useColorScheme()
  // get the Color based on the theme
  const themedLogo = colorTheme ==='light'? LightLogo: DarkLogo

  
  return (
    <Image source={themedLogo}/>
    
  )
}

export default ThemedLogo
