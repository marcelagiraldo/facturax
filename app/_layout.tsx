import { Stack } from "expo-router";

import "../global.css";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>      
      <Stack.Screen name="principal" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default HomeLayout