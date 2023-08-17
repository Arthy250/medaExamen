import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {empleadosStyle, globalStyles} from '../theme/themeStyles';
import NuevoEmpleado from '../components/NuevoEmpleado';
import axios from 'axios';

// Interfaces
import { Empleado } from '../interfaces/appInterface';

// Localhost URL
import { baseURL } from '../api/LocalApi';

// navigation
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}

const EmpleadosScreen = ({navigation}:Props) => {
  const [modal, mostrarModal] = useState<boolean>(false);
  const [usuarios, setUsuarios] = useState<Empleado[]>([]);

  const guardarUsuario = async (empleado: any) => {
    // verificar que los campos contengan no esten vacios
    if ([empleado.nombre, empleado.usuario, empleado.password].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    //Crear usuario
    try {
      await axios.post(`${baseURL}/usuarios`, empleado);
    } catch (error) {
      console.log(error);
    }
    
    consultarUsuarios()

    // Ocultar modal
    mostrarModal(!modal);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <Pressable 
              style={{marginLeft:15}}
              onPress={ () => navigation.navigate('Login')}>
              <Text>Cerrar sesión</Text>
          </Pressable>
      )
    })
  }, [])
  
  const consultarUsuarios = async () => {
    // Consultar usuarios a la db
    try {
      const {data} = await axios.get(`${baseURL}/usuarios`);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  const cerrarModal = () => {
    mostrarModal(!modal);
  };
  
  useEffect(() => {
    consultarUsuarios()
  }, [])
  

  return (
    <View style={[globalStyles.contenido, {marginBottom: 30}]}>
      <ScrollView>
        {
          usuarios.map( (usuario) => 
            (
            <View style={empleadosStyle.cardEmpleado} key = {usuario.id}>
              <Text>Nombre: {usuario.nombre}</Text>
            </View>
        ))
        }
      </ScrollView>

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            mostrarModal(!modal);
          }}>
          <NuevoEmpleado
            guardarUsuario={guardarUsuario}
            cerrarModal={cerrarModal}
          />
        </Modal>
      )}

      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={globalStyles.button}
          onPress={() => mostrarModal(!modal)}>
          <Text style={globalStyles.buttonText}>Agregar empleado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmpleadosScreen;
