import {Text, View} from 'react-native';
import {useEffect} from 'react';

// navigation
import {StackScreenProps} from '@react-navigation/stack';
import {globalStyles, usuarioStyles} from '../theme/themeStyles';
interface Props extends StackScreenProps<any, any> {}

const UsuarioScreen = ({route, navigation}: Props) => {
  const {nombre, usuario}:any = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: nombre,
    });
  }, []);

  return (
    <View style={globalStyles.contenido}>
      <View style={usuarioStyles.cardItem}>
        <Text style={usuarioStyles.cardText}>Nombre: {nombre}</Text>
        <Text style={usuarioStyles.cardText}>Usuario: {usuario}
        </Text>
      </View>
    </View>
  );
};

export default UsuarioScreen;
