import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#003B73", // Color de fondo azul oscuro
        },
        headerTintColor: "#ffffff", // Texto del header en blanco
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        headerShadowVisible: false, // Elimina la sombra del header
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      
      <Stack.Screen name="principal" options={{headerShown: false}}
      />
    </Stack>
  );
};

export default HomeLayout;
