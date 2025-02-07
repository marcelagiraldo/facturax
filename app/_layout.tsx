import { Stack } from "expo-router";

import "../global.css";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="profile" options={{ headerShown: false }}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
      <Stack.Screen name="client" options={{ headerShown: false }}/>
      <Stack.Screen name="product" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default HomeLayout