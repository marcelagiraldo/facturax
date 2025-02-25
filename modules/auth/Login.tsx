import {View,Text,Pressable,TextInput,StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import Svg, { Ellipse } from "react-native-svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginModule = () => {
  function SvgTop() {
    return (
      <Svg width="390" height="150" viewBox="0 0 390 163" fill="none">
        <Ellipse cx="195" cy="7.5" rx="283" ry="155.5" fill="#003B73" />
      </Svg>
    );
  }
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.svgContainer}>
          <SvgTop></SvgTop>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.loginButton}>
            <Text style={styles.textWhite}>Iniciar Sesión</Text>
          </Pressable>
          <Link asChild href={"/register"}>
            <Pressable style={styles.registerButton}>
              <Text style={styles.textBlack}>Registrarse</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput style={styles.input} placeholder="Usuario" />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
          />
          <Pressable style={styles.loginButton}>
            <Text style={styles.textWhite}>Iniciar Sesión</Text>
          </Pressable>
          <Pressable className="mt-4">
            <Text className="text-blue-500">¿Olvidaste la contraseña?</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  svgContainer: {
    position: "absolute",
    top: 0,
    bottom: 200,
    width: "100%", // Ocupa todo el ancho
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 150,
    paddingBottom: 0,
  },
  loginButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  textWhite: {
    color: "white",
    fontWeight: "bold",
  },
  textBlack: {
    color: "black",
    fontWeight: "bold",
  },
  contentContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "left",
    marginBottom: 30,
  },
});
export default LoginModule;
