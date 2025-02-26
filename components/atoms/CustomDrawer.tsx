import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AntDesign from "@expo/vector-icons/AntDesign";
import logo from "../../assets/facturaxblack.png";
import { Link } from "expo-router";

const CustomDrawer = (props:any) => {
  const handleToggleDrawer = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView className="flex-1 bg-white ">
      {/* Contenedor superior con botón de cerrar y logo */}
      <View className="flex-row items-center w-full justify-between px-4">
        {/* Botón de cerrar */}
        <TouchableOpacity onPress={handleToggleDrawer} className="p-2">
          <AntDesign name="close" size={35} />
        </TouchableOpacity>

        {/* Logo */}
        <TouchableOpacity className="flex-1 items-center">
          <Image style={{ width: 100, height: 100 }} source={logo} />
        </TouchableOpacity>
      </View>

      {/* Menú de navegación */}
      <View className="px-3">
        <DrawerItemList {...props} />
      </View>
      <View className="pb-6">
        <Link asChild href={'/login'}>
            <Pressable className="self-start ml-4 p-3">
                <AntDesign name="logout" size={35}/>
            </Pressable>
        </Link>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
