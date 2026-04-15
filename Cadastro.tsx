import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
 
//Define o tipo de props recebidas pelo componente Cadastro.
type CadastroProps = {
    voltarParaLogin: () => void;
    onCadastroRealizado?: (nome: string) => void;
};
 
//Criar um comportamento Cadastro recebendo a prop voltarParaLoin
function Cadastro({ voltarParaLogin, onCadastroRealizado }: CadastroProps) {
    //Armazenar o nome digitado.
    const [nome, setNome] = useState('');
    //Armazenaor o email digitado.
    const [email, setEmail] = useState('');
    //Armazenar a senha digitada
    const [senha, setSenha] = useState('');
    //Opção de mensagem
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    //Estado para mensagem de erro
    const [mensagemErro, setMensagemErro] = useState('');
 
    const cadastrar = () => {
        // Limpar mensagens anteriores
        setMensagemErro('');
        setMensagemSucesso('');
        
        // Validação: verificar se os campos estão preenchidos
        if (!nome.trim() || !email.trim() || !senha.trim()) {
            setMensagemErro('Preencha todos os campos');
            return;
        }
        
        //Simula o salvamento apenas com o console.log (sem bd)
        console.log('Dados cadastrados:', {nome,email,senha});
        //Chamar a função para notificar o App do novo usuário cadastrado
        if (onCadastroRealizado) {
            onCadastroRealizado(nome);
        }
        //Mostrar a mensagem de sucesso na tela
        setMensagemSucesso('Cadastro realizado com sucesso!');
        //Limpa os valores das variaveis
        setNome('');
        setEmail('');
        setSenha('');
    };
    //Retorna a interface a tela de cadastro
    return(
        //View principal - div pai
        <View style={styles.container}>
 
            <Text style ={styles.titulo}>Cadastro</Text>
            {/* Campo de nome. TextInput é um componente de entrada de texto */}
            <TextInput
                style = {styles.Input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style = {styles.Input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style = {styles.Input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry // Criptografa a senha para o usuario
            />
            <View style={styles.botao}>
                <Button title="Cadastrar" onPress={cadastrar} color="#66bb6a" />
            </View>
            {/* Botão para voltar para a tela de login usando a prop voltarParaLogin */}
            <View style={styles.botao}>
                <Button title="Voltar para Login" onPress={voltarParaLogin} color="#66bb6a" />
            </View>
            {/* mostra a mensagem de erro somente se ela tiver conteúdo */}
            {mensagemErro ? (
                <Text style={styles.mensagemErro}>{mensagemErro}</Text>
                ) : null}
            {/* mostra a mensagem de sucesso somente se ela tiver conteúdo */}
            {mensagemSucesso ? (
                <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
                ) : null}
        </View>
    );
}
  const styles = StyleSheet.create({
        container:{
            //flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:24,
        },
        titulo:{
            fontSize:28,
            fontWeight:'bold',
            marginBottom:24,
            color: '#4caf50',
        },
        Input:{
            width:'100%',
            height: 48,
            borderWidth:1,
            borderColor:'#4caf50',
            borderRadius:8,
            padding:12,
            marginBottom:12,
            backgroundColor: '#ffffff',
        },
        botao:{
            width:'100%',
            marginBottom:8,
        },
        mensagemSucesso:{
            marginTop:16,
            color:'#1f7a1f',
            fontSize:16,
            textAlign: 'center',
        },
        mensagemErro:{
            marginTop:16,
            color:'#d32f2f',
            fontSize:16,
            textAlign: 'center',
        },


    });
    export default Cadastro;
 
