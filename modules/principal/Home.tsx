import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgTop from "../../components/atoms/SvgTop";
import logo from "../../assets/facturax.png";
import { containers } from "../../components/Tokens";
import AntDesign from "@expo/vector-icons/AntDesign";
import CardInfo from "../../components/atoms/CardInfo";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeModule = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar hidden={false} style="light" />

      {/* SVG en la parte superior */}
      <SvgTop />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={{ width: 120, height: 120 }} />
      </View>

      {/* Contenedor principal con margen para evitar superposición */}
      <View style={styles.container}>
        <CardInfo color="#4A90E2" iconComponent={<AntDesign name="home" size={24} color="black" />} text="Ventas del día" amount="$ 0.00" />
        <CardInfo color="#4A90E2" iconComponent={<Ionicons name="cash-outline" size={24} color="black" />} text="Ventas efectivos" amount="$ 0.00" />
        <CardInfo color="#4A90E2" iconComponent={<MaterialCommunityIcons name="currency-usd" size={24} color="black" />} text="Ventas otros medios" amount="$ 0.00" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: 40, // Espacio extra para evitar superposición con el SVG
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    position: "absolute",
    marginTop: 5,
    right: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center", // Centra la tarjeta en la pantalla
    alignItems: "center",
    width: "100%",
    marginTop: 20, // Ajusta para evitar que se monte en el SVG
  },
  card: {
    backgroundColor: "#4A90E2",
    width: 200,
    height: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:20
  },
  iconContainer: {
    backgroundColor: "#FFC107",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  amount: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
export default HomeModule;
