import React from "react"; // Importar para criar componentes
import { useState } from "react"; // Importar para guardar e atualizar estados
import { SafeAreaView, StyleSheet, Text, View } from "react-native"; // Importa componentes visuais
import Login from "./Login";
import Cadastro from "./Cadastro";
 
function App() { // Componente principal
  //useState criar uma variavel de estado chamada telaAtual  
  //Ela começa com valor "login"
  //SetTelaAtual é usada para trocar o valor
  const [telaAtual, setTelaAtual] =  useState<'login' | 'cadastro'>('login');
  //Estado para armazenar o último usuário cadastrado
  const [ultimoUsuario, setUltimoUsuario] = useState<string | undefined>(undefined);
 
 // Esta função muda a tela atual para "cadastro"
 const irParaCadastro = () => {
    setTelaAtual('cadastro');
 };
 
 const voltaParaLogin = () => {
  setTelaAtual('login');
 };
 
 //Função para receber o nome do novo usuário cadastrado
 const handleCadastroRealizado = (nome: string) => {
  setUltimoUsuario(nome);
 };
 
 return (
  <SafeAreaView style={styles.container}>
   {/* Header com título personalizado */}
   <View style={styles.header}>
     <Text style={styles.appTitle}>App do Bernardo Rabelo</Text>
   </View>
   {/* {Navegação manual:
   Se a telaAtual for "login", mostra a tela login
   Se não for, mostra a tela Cadastro.
   Isso substitui o uso de bibliotecas de navegação neste exemplo.
   } */}
{telaAtual === 'login' ? (
   //Passa a função irParaCadastro como prop para o componente login
   <Login irParaCadastro={irParaCadastro} ultimoUsuarioCadastrado={ultimoUsuario} />
): (
   //Passa a função VoltarParaLogin e a função de cadastro como prop para o componente cadastro
      <Cadastro voltarParaLogin={voltaParaLogin} onCadastroRealizado={handleCadastroRealizado} />
)}
  </SafeAreaView>
 );
} 
//Criar os estilos do componente
const styles = StyleSheet.create({
  //Estilo principal da tela.
  container: {
    //Faz a tela ocupar todo o espaço disponivel
    flex: 1,
    //Fundo com gradiente verde para melhorar UX/UI
    backgroundColor: '#e8f5e8'
  },
  //Estilo do header
  header: {
    backgroundColor: '#4caf50',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  //Estilo do título personalizado
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  }
});
 
//Exporta o componente App para ser usado como entrada do projeto
export default App;


