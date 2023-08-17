import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LoginEmpresaScreen from "../screens/LoginEmpresaScreen";
import UsuariosScreen from "../screens/UsuariosScreen";
import PostsScreen from "../screens/PostsScreen";
import EmpleadosScreen from "../screens/EmpleadosScreen";
import UsuarioScreen from "../screens/UsuarioScreen";

const Stack = createStackNavigator()

const Navigator = () => {
    return ( 
        <Stack.Navigator 
            screenOptions={{
                cardStyle:{
                    backgroundColor: '#fff'
                  }
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Empresa' component={LoginEmpresaScreen}/>
            <Stack.Screen name='Usuarios' component={UsuariosScreen}/>
            <Stack.Screen name='Posts' component={PostsScreen}/>
            <Stack.Screen name='Empleados' component={EmpleadosScreen}/>
            <Stack.Screen name='Usuario' component={UsuarioScreen}/>
            
        </Stack.Navigator>
     );
}
 
export default Navigator;