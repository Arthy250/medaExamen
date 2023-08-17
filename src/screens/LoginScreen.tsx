import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles, loginStyles } from "../theme/themeStyles";

// Navigation props
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({ navigation }:Props) => {

    return (
        <View style={[globalStyles.contenido, {flex:1}]}>
           
           <View style={loginStyles.contenedorBotones}>
                
                <TouchableOpacity 
                    activeOpacity={0.7}
                    style={globalStyles.button}
                    onPress={() => navigation.navigate('Empresa')}>
                    <Text style={globalStyles.buttonText}>Login empresa</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={globalStyles.button}
                    onPress={() => navigation.navigate('Usuarios')}>
                    <Text style={globalStyles.buttonText}>Login empleado</Text>
                </TouchableOpacity>

            </View>
            
            <View style={loginStyles.postsContenedor}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={loginStyles.buttonPosts}
                    onPress={() => navigation.navigate('Posts')}>
                    <Text style={[globalStyles.buttonText, loginStyles.buttonPostsText]}>Ver posts</Text>
                </TouchableOpacity>
            </View>
            
        </View> 
     );
}
 
export default LoginScreen;