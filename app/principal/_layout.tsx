import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const PrincipalLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
      <Drawer.Screen
          name='home'
          options={{
            drawerLabel:'Home',
            title:'Home'
          }}  
        />
        <Drawer.Screen
          name='bill'
          options={{
            drawerLabel:'Facturas',
            title:'Facturas'
          }}  
        />
        <Drawer.Screen
          name='client'
          options={{
            drawerLabel:'Clientes',
            title:'Clientes'
          }}  
        />
        <Drawer.Screen
          name='product'
          options={{
            drawerLabel:'Productos',
            title:'Productos'
          }}  
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default PrincipalLayout