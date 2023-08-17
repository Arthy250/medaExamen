import {Pressable, Text, SafeAreaView, TextInput, View} from 'react-native';
import {globalStyles, modalStyles} from '../theme/themeStyles';
import {useForm} from '../hooks/useForm';

const NuevoEmpleado = ({guardarUsuario, cerrarModal}: any) => {
  
    const {nombre, usuario, password, onChange} = useForm({
        nombre: '',
        usuario: '',
        password: '',
    });

  return (
    <SafeAreaView style={modalStyles.contenedor}>
      
      <Text style={modalStyles.titulo}>Agregar nuevo usuario</Text>

      <View style={modalStyles.formulario}>

        <Text style={modalStyles.label}>Nombre</Text>
        <TextInput
            placeholder="Ingrese su nombre de usario"
            style={globalStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={nombre}
            onChangeText={value => onChange(value, 'nombre')}
        />

        <Text style={modalStyles.label}>Nombre de usuario</Text>
        <TextInput
            placeholder="Ingrese su nombre de usario"
            style={globalStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={usuario}
            onChangeText={value => onChange(value, 'usuario')}
        />

        <Text style={modalStyles.label}>Contraseña</Text>
        <TextInput
            placeholder="Ingrese su contraseña"
            secureTextEntry
            style={globalStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={password}
            onChangeText={value => onChange(value, 'password')}
        />

        <View style={modalStyles.botonesContenedor}>
            
            <Pressable 
                style={globalStyles.button}
                onPress={ () => guardarUsuario({
                    nombre,
                    usuario,
                    password
                })}>
                <Text style={globalStyles.buttonText}>Guardar usuario</Text>
            </Pressable>

            <Pressable style={[globalStyles.button, modalStyles.button]} onPress={() => cerrarModal()}>
                <Text style={globalStyles.buttonText}>Cancelar</Text>
            </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default NuevoEmpleado;
