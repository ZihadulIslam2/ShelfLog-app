import { Link } from 'expo-router'
import { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { useUser } from '../../hooks/useUser'

import Space from '../../components/Space'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedView from '../../components/ThemedView'
import { Colors } from '../../constants/Colors'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { user, register } = useUser()

  const handleSubmit = async () => {
    setError(null)

    try {
      await register(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* here touchablewithoutfeedback used, - when the keyboard active, if a user clicked other side of a display the keyboard will closed.  */}
      <ThemedView style={styles.container}>
        <Space />

        <ThemedText title={true} style={styles.title}>
          Register an account
        </ThemedText>

        <Space />

        <ThemedTextInput
          style={{ marginBottom: 20, width: '80%' }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: '80%' }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>

        <Space />

        {error && <Text style={styles.error}>{error}</Text>}

        <Space height={100} />

        <Link href="/login" replace>
          <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
  },
})
