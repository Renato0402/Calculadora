import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

export default (props) => {
  const estilosBotoes = [estilos.btn];

  if (props.duplo) estilosBotoes.push(estilos.btnDuplo);
  if (props.igual) estilosBotoes.push(estilos.btnIgual);
  if (props.operacao) estilosBotoes.push(estilos.btnOper);
  if (props.ac) estilosBotoes.push(estilos.btnAC);
  if (props.bs) estilosBotoes.push(estilos.btnBS);

  return (
    <TouchableOpacity onPress={props.click}>
      <Text style={estilosBotoes}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
  btnIgual: {
    color: "#f00",
  },
  btnOper: {
    color: "#0f0",
  },
  btnAC: {
    color: "#ff0",
  },
  btnBS: {
    color: "#0ff",
  },
  btnDuplo: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2,
  },
});
