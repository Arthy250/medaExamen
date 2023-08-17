import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../theme/themeStyles";

const Loading = () => {
  return (
    <View style={globalStyles.contenido}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Loading;
