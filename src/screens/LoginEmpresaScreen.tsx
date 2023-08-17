import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {globalStyles, loginStyles} from '../theme/themeStyles';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> {}

const LoginEmpresaScreen = ({navigation}:Props) => {

    const { usuario, password, onChange} = useForm({
        usuario:'',
        password:''
    })

    const handleLogin = () => {
        
        // Verificar que los campos no esten vacios
        if(usuario == '' || password == '') {
          Alert.alert('Error', 'Todos los campos son obligatorios')
          return
        }

        // Verificar datos correctos
        if(usuario != 'admin' || password != 'test') {
          Alert.alert('Error', 'Credenciales incorrectas')
          return
        }
        onChange('', 'password')
        navigation.navigate('Empleados')
    }

  return (
    <View style={[globalStyles.contenido, {flex:1}]}>
      <Text style={globalStyles.textInput}>Usuario</Text>
      <TextInput
        placeholder="Ingrese su nombre de usario"
        style={globalStyles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="rgba(0,0,0,0.4)"
        value={usuario}
        onChangeText={ (value) => onChange(value, 'usuario') }
      />

      <Text style={globalStyles.textInput}>Contraseña</Text>
      <TextInput
        placeholder="Ingrese su contraseña"
        secureTextEntry
        style={globalStyles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="rgba(0,0,0,0.4)"
        value={password}
        onChangeText={ (value) => onChange(value, 'password') }
      />

      <View style={loginStyles.buttonLogin}>
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={globalStyles.button}
            onPress={() => handleLogin()}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginEmpresaScreen;
