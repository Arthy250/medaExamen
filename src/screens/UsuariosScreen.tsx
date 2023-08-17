import { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {globalStyles, usuarioStyles} from '../theme/themeStyles';
import axios from 'axios';

// Interfaces
import { Empleado } from '../interfaces/appInterface';

// Localhost URL
import { baseURL } from '../api/LocalApi';

// navigation
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}

const UsuariosScreen = ({navigation}:Props) => {
    const [usuarios, setUsuarios] = useState<Empleado[]>([]);

    const consultarUsuarios = async () => {
        // Consultar usuarios a la db
        try {
          const {data} = await axios.get(`${baseURL}/usuarios`);
          setUsuarios(data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        consultarUsuarios()
      }, [])
      

  return (
    <View style={[globalStyles.contenido, {paddingTop:10}]}>
    <FlatList 
            data={usuarios}
            keyExtractor={ (u) => u.id}
            numColumns={2}
            renderItem={ ({item})  => (
                <View style={usuarioStyles.item}>
                <TouchableOpacity
                    activeOpacity={0.8} 
                    onPress={ () => navigation.navigate('Usuario', {nombre: item.nombre, usuario:item.usuario})}
                    >
                    <Text style={usuarioStyles.textItem}>{ item.nombre }</Text>
                </TouchableOpacity>
                </View>
            )}
         />
    </View>
  );
};

export default UsuariosScreen;
