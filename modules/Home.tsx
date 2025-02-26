import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import logo from '../assets/facturax.png';

const HomeModule = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F6'}}>
      <StatusBar style="light" />

      {/* Sección superior */}
      <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#003B73', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <Image source={logo} style={{ width: 200, height: 240, resizeMode: 'contain' }} />
      </View>

      {/* Sección inferior */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Link asChild href="/login">
          <Pressable style={{ backgroundColor: '#4A90E2', padding: 14, borderRadius: 10, width: 200, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Iniciar Sesión</Text>
          </Pressable>
        </Link>

        <Link asChild href="/register">
          <Pressable style={{ backgroundColor: '#4A90E2', padding: 14, borderRadius: 10, width: 200, alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Registrarse</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeModule;
