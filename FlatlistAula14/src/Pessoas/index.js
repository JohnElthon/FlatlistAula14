import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";

class Pessoas extends Component{
    render(){
        return(
            <View style={Styles.area}>
                <View style={styles.cabecalho}>
                    <Text style={styles.Apresentacao}>Seja Bem Vindo</Text>
                </View>
                <Text style ={styles.textoPessoa}>Nome: {this.props.data.nome}  </Text>
                 <Text style= {styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
                 <Text style = {styles.textoPessoa}>E-mail:{this.props.data.email}</Text>
            </View>

        );
    }
}