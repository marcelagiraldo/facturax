import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CardInfoProps {
  color: string;
  text: string;
  amount: string;
  iconComponent?: React.ReactNode; // Permite pasar un icono de cualquier librería
  iconImage?: any; // Permite pasar una imagen local o remota
}

const CardInfo = ({ color, iconComponent, iconImage , text, amount }: CardInfoProps) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      {/* Icono */}
      <View style={styles.iconContainer}>
      {iconComponent ? (
          iconComponent // Si se pasa un componente, lo renderiza
        ) : iconImage ? (
            <Image source={iconImage} style={styles.iconImage} />
        ) : null}
      </View>

      {/* Texto */}
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    marginBottom: 20,
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
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default CardInfo;
