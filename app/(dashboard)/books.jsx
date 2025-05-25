import { StyleSheet } from 'react-native'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
    rue} style={styles.heading}>
        Your Reading List
      </ThemedText>  <Spacer />
      <ThemedText title={t
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'stretch',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})
