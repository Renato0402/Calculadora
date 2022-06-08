import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ColorPropType,
} from "react-native";


export default (props) => {
  return (
    <View style={estilos.display}>
      <Text style={estilos.textoDisplayOper} numberOfLines={1}>
        {props.valor}
      </Text>
      <View style={estilos.line}></View>
      <Text style={estilos.textoDisplayRes} numberOfLines={1}>
        {props.res}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  display: {
    flex: 1,
    //padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#444",
    width: "100%",
  },
  textoDisplayRes: {
    fontSize: 50,
    color: "#fff",
    marginRight:20
  },
  textoDisplayOper: {
    fontSize: 25,
    color: "#fff",
    marginRight:20
  },
  line: {
      width:Dimensions.get('window').width,
      height:2,
      backgroundColor:'#ccc'
  },
});
