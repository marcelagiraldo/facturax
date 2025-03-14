import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SvgTop from "../../components/atoms/SvgTop";
import { colors, containers } from "../../components/Tokens";
import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
const LoginModule = () => {
  const router = useRouter();
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
  const [showPassword, setShowPassword] = useState(false);
  const onLogin = async (data) => {
    console.log("Datos enviados al backend:", data);
    try {
      const response = await axios.post(
        "http://192.168.1.101:3006/usuarios/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (response.data.success) {
        // Guardar el token y/o datos del usuario en AsyncStorage si es necesario
        await AsyncStorage.setItem("@userToken", response.data.token);
        await AsyncStorage.setItem(
          "@userData",
          JSON.stringify(response.data.user)
        );
        alert("Inicio de sesión exitoso");
        console.log(router);
        router.replace("/principal");
        console.log("Inicio sesion Exitoso");
      } else {
        alert(response.data.message || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud de inicio de sesión", error);
      alert(
        "Error en el inicio de sesión. Verifica tus credenciales e intenta de nuevo."
      );
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
          <View style={styles.passwordContainer}>
            <Controller
              control={control}
              rules={{
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Debe incluir una mayúscula, un número y un carácter especial",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Contraseña"
                  secureTextEntry={!showPassword}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}
          <View style={styles.login}>
            <Pressable
              style={styles.loginButton}
              onPress={handleSubmit(onLogin)}
            >
              <Text style={styles.textWhite}>Iniciar Sesión</Text>
            </Pressable>

            <Pressable className="mt-4">
              <Text className="text-blue-500 text-lg">
                ¿Olvidaste la contraseña?
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 30,
  },
  registerButton: {
    backgroundColor: colors.secondaryGray,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    fontSize: 30,
  },
  textWhite: {
    color: colors.textLight,
    fontWeight: "bold",
    fontSize: 20,
  },
  textBlack: {
    color: colors.textDark,
    fontWeight: "bold",
    fontSize: 20,
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
    fontSize: 20,
    width: 300,
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "left",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  login: {
    marginTop: 30,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 30,
  },
  inputPassword: {
    flex: 1,
    fontSize: 20,
    height: 55,
    paddingHorizontal: 20,
  },
  eyeIcon: {
    padding: 10,
  },
});
export default LoginModule;
