import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SvgTop from "../../components/atoms/SvgTop";
import { colors, containers } from "../../components/Tokens";

import { useForm, Controller } from "react-hook-form";
const LoginModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSendInfo = async () => {
    try {
      const infoLogin = {
        email,
        password,
      };
      await AsyncStorage.setItem("@infologin", JSON.stringify(infoLogin));
      router.navigate("/principal");
      console.log("Info saved");
    } catch (e) {
      console.log("Error on save");
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    router.navigate("/principal");
  };
  const onLogin = async (data: any) => {
    try {
      const storedUser = await AsyncStorage.getItem("@userData");

      if (!storedUser) {
        alert("No hay usuarios registrados. Por favor, regístrese primero.");
        return;
      }

      const user = JSON.parse(storedUser);

      // Verificar si el usuario existe en el almacenamiento
      if (user.email !== data.email) {
        alert("Este usuario no está registrado.");
        return;
      }

      // Verificar si la contraseña es correcta
      if (user.password !== data.password) {
        alert("Contraseña incorrecta.");
        return;
      }

      // Si todo está bien, iniciar sesión
      alert("Inicio de sesión exitoso");
      router.navigate("/principal");
    } catch (e) {
      console.log("Error al recuperar usuario", e);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <SvgTop />
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
          {/* Campo de correo electrónico */}
          <Controller
            control={control}
            rules={{
              required: "El correo es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Ingresa un correo válido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}

          {/* Campo de contraseña */}
          <Controller
            control={control}
            rules={{
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "Debe incluir una mayúscula, un número y un carácter especial",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}

          <Pressable style={styles.loginButton} onPress={handleSubmit(onLogin)}>
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
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 150,
    paddingBottom: 0,
  },
  loginButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondaryGray,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  textWhite: {
    color: colors.textLight,
    fontWeight: "bold",
  },
  textBlack: {
    color: colors.textDark,
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
