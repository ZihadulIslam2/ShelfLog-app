import { Stack } from "expo-router";
// eslint-disable-next-line import/namespace
import { UserProvider } from '../contexts/userContext'

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ddd' },
          headerTintColor: '#333',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </UserProvider>
  )
}
