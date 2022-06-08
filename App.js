import StatusBar from "./components/statusBar";
import React, { useState } from "react";
import Display from "./components/display";
import Btn from "./components/botao";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

let estados = {
  valorTela: "",
  resultado: 0,
  operado: false,
  ponto: false,
};

export default function App() {
  const [vTela, setVtela] = useState(estados.valorTela);
  const [vRes, setVres] = useState(estados.resultado);

  const addDigito = (digito) => {
    if (digito == "." && !estados.ponto) {
      estados.ponto = true;
      estados.operado = false;
    } else {
      if (digito == "." && estados.ponto) return;
    }

    if (digito == "+" || digito == "-" || digito == "/" || digito == "*") {
      estados.ponto = false;
    }

    if (
      estados.operado &&
      (digito == "+" || digito == "-" || digito == "/" || digito == "*")
    ) {
      estados.valorTela = estados.resultado;
      setVtela(estados.valorTela);
      setVres(0);
    }

    estados.valorTela += digito;
    setVtela((estados.valorTela));
    setVres(estados.resultado);
    estados.operado = false;
  };

  const limparTela = () => {
    estados = {
      valorTela: "",
      resultado: 0,
      operado: false,
      ponto: false,
    };
    setVtela(estados.valorTela);
    setVres(estados.resultado);
  };

  const opera = (d) => {
    if (d == "AC") {
      limparTela();
      return;
    }
    if (d == "BS") {
      estados.valorTela = vTela.substring(0, vTela.length - 1);
      setVtela(estados.valorTela);
      return;
    }

    try {
      estados.resultado = eval(estados.valorTela);
      setVres(estados.resultado);
      estados.operado = true;
    } catch {
      estados.resultado = "Erro";
      estados.operado = true;
      setVres(estados.resultado);
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar />
      <Text>Calculadora</Text>
      <Display valor={vTela} res={vRes} />
      <View style={estilos.botoes}>
        <Btn
          label="AC"
          ac
          click={() => {
            opera("AC");
          }}
        ></Btn>
        <Btn
          label="("
          click={() => {
            addDigito("(");
          }}
        ></Btn>
        <Btn
          label=")"
          click={() => {
            addDigito(")");
          }}
        ></Btn>
        <Btn
          label="/"
          operacao
          click={() => {
            addDigito("/");
          }}
        ></Btn>
        <Btn
          label="7"
          click={() => {
            addDigito("7");
          }}
        ></Btn>
        <Btn
          label="8"
          click={() => {
            addDigito("8");
          }}
        ></Btn>
        <Btn
          label="9"
          click={() => {
            addDigito("9");
          }}
        ></Btn>
        <Btn
          label="*"
          operacao
          click={() => {
            addDigito("*");
          }}
        ></Btn>
        <Btn
          label="4"
          click={() => {
            addDigito("4");
          }}
        ></Btn>
        <Btn
          label="5"
          click={() => {
            addDigito("5");
          }}
        ></Btn>
        <Btn
          label="6"
          click={() => {
            addDigito("6");
          }}
        ></Btn>
        <Btn
          label="-"
          operacao
          click={() => {
            addDigito("-");
          }}
        ></Btn>
        <Btn
          label="1"
          click={() => {
            addDigito("1");
          }}
        ></Btn>
        <Btn
          label="2"
          click={() => {
            addDigito("2");
          }}
        ></Btn>
        <Btn
          label="3"
          click={() => {
            addDigito("3");
          }}
        ></Btn>
        <Btn
          label="+"
          operacao
          click={() => {
            addDigito("+");
          }}
        ></Btn>
        <Btn
          label="0"
          click={() => {
            addDigito("0");
          }}
        ></Btn>
        <Btn
          label="."
          click={() => {
            addDigito(".");
          }}
        ></Btn>
        <Btn
          label="<-"
          bs
          click={() => {
            opera("BS");
          }}
        ></Btn>
        <Btn
          label="="
          igual
          click={() => {
            opera("=");
          }}
        ></Btn>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
