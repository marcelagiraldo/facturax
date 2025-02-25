import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import Svg, { Ellipse } from "react-native-svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterModule = () => {
  function SvgTop() {
    return (
      <Svg
        width="390"
        height="130"
        viewBox="0 0 390 163"
        fill="none"
      >
        <Ellipse cx="195" cy="7.5" rx="283" ry="155.5" fill="#003B73" />
      </Svg>
    );
  }
  return (    
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>  
        <View style={styles.svgContainer}><SvgTop></SvgTop></View>
        <View style={styles.buttonContainer}>
          <Link asChild href={'/login'}>
            <Pressable style={styles.loginButton}>
              <Text style={styles.textBlack}>Iniciar Sesión</Text>
            </Pressable>
          </Link>
          <Link asChild href={'/register'}>
            <Pressable style={styles.registerButton}>
              <Text style={styles.textWhite}>Registrarse</Text>
            </Pressable>
          </Link>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <View >
          <View>
            <TextInput style={styles.input} placeholder="Nombre" />
            <TextInput style={styles.input} placeholder="Apellido" />
          </View>

          <View>
            <TextInput style={styles.input} placeholder="Correo" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
          </View>

          <View>
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
            <TextInput style={styles.input} placeholder="Repetir contraseña" secureTextEntry />
          </View>
        </View>
          
          <Pressable style={styles.registerButton}>
            <Text style={styles.textWhite}>Registrarse</Text>
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
    marginBottom:30
  },
  svgContainer: {
    position: "absolute", 
    top: 0, 
    bottom:200,
    width: "100%", // Ocupa todo el ancho
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 150,
    paddingBottom:0
  },
  loginButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#4A90E2",
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
    marginTop:30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width:280,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "left",
    marginBottom:30
  },
  containerForm:{
    flexDirection: "row",
    justifyContent: "center",
  }
});
export default RegisterModule;
