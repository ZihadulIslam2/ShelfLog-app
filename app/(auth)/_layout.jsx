import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import GestOnly from '@/components/auth/GestOnly'

export default function AuthLayout() {
    return (
      <GestOnly>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
      </GestOnly>
    )
}