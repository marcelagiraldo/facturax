import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '../../components/atoms/CustomDrawer';

const PrincipalLayout = () => {
  return (
    <GestureHandlerRootView>
      
      <Drawer drawerContent={(props)=><CustomDrawer {...props}/>}
        screenOptions={{
          headerStyle: { backgroundColor: '#003B73' }, // Fondo del header
          headerTintColor: '#fff', // Color del texto del header
          drawerType: 'slide', // Efecto deslizante del drawer
          overlayColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo al abrir
        }}
      >
      <Drawer.Screen
          name='home'
          options={{
            drawerLabel:'Home',
            title:''
          }}  
        />
        <Drawer.Screen
          name='bill'
          options={{
            drawerLabel:'Facturas',
            title:''
          }}  
        />
        <Drawer.Screen
          name='client'
          options={{
            drawerLabel:'Clientes',
            title:''
          }}  
        />
        <Drawer.Screen
          name='product'
          options={{
            drawerLabel:'Productos',
            title:''
          }}  
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default PrincipalLayout