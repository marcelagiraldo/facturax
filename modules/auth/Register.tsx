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
import SvgTop from "../../components/atoms/SvgTop";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { containers } from "../../components/Tokens";
const RegisterModule = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    router.navigate("/principal");
  };
  const onRegister = async (data: any) => {
    try {
      handleSubmit(onSubmit);
      await AsyncStorage.setItem("@userData", JSON.stringify(data));
      alert("Registro exitoso");
      router.navigate("/login"); // Redirige a la pantalla de Login
    } catch (e) {
      console.log("Error al guardar usuario", e);
    }
  };
  const password = watch("password");
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.svgContainer}>
          <SvgTop></SvgTop>
        </View>
        <View style={styles.buttonContainer}>
          <Link asChild href={"/login"}>
            <Pressable style={styles.loginButton}>
              <Text style={styles.textBlack}>Iniciar Sesión</Text>
            </Pressable>
          </Link>
          <Link asChild href={"/register"}>
            <Pressable style={styles.registerButton}>
              <Text style={styles.textWhite}>Registrarse</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <View>
            <View>
              <Controller
                control={control}
                rules={{
                  required: "El nombre es obligatorio",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "El nombre solo debe contener letras",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Nombres"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                  />
                )}
                name="name"
              />
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name.message}</Text>
              )}

              {/* Campo de contraseña */}
              <Controller
                control={control}
                rules={{
                  required: "El apellido es obligatorio",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "El apellido solo debe contener letras",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Apellidos"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                  />
                )}
                name="lastname"
              />
              {errors.lastname && (
                <Text style={{ color: "red" }}>{errors.lastname.message}</Text>
              )}
            </View>

            <View>
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
              <Controller
                control={control}
                rules={{
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/, // Solo números
                    message: "El teléfono solo debe contener números",
                  },
                  minLength: {
                    value: 10,
                    message: "El teléfono debe tener al menos 10 dígitos",
                  },
                  maxLength: {
                    value: 15,
                    message: "El teléfono no debe superar los 15 dígitos",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                    keyboardType="phone-pad" // Solo números y caracteres telefónicos
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="phone"
              />
              {errors.phone && (
                <Text style={{ color: "red" }}>{errors.phone.message}</Text>
              )}
            </View>

            <View>
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
              <Controller
                control={control}
                rules={{
                  required: "La contraseña es obligatoria",
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Repetir contraseña"
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
            </View>
          </View>

          <View style={styles.register}>
            <Pressable
              style={styles.registerButton}
              onPress={handleSubmit(onRegister)}
            >
              <Text style={styles.textWhite}>Registrarse</Text>
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
    marginTop: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: 280,
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "left",
    marginTop: 30,
  },
  containerForm: {
    flexDirection: "row",
    justifyContent: "center",
  },
  register: {
    marginTop: 30,
  },
});
export default RegisterModule;
