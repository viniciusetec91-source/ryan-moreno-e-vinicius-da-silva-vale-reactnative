import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CORES } from '../data/herois';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function validar() {
    if (usuario.trim().length < 3) return 'O usuário precisa ter pelo menos 3 caracteres.';
    if (senha.length < 4) return 'A senha precisa ter pelo menos 4 caracteres.';
    return '';
  }

  function entrar() {
    const mensagem = validar();
    setErro(mensagem);
    if (mensagem) return;
    navigation.replace('Home', { usuario: usuario.trim() });
  }

  return (
    <KeyboardAvoidingView
      style={estilos.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <View style={estilos.caixa}>
        <Text style={estilos.logo}>
          COMIC<Text style={estilos.logoDc}>VERSE</Text>
        </Text>
        <Text style={estilos.subtitulo}>Entre no multiverso Marvel &amp; DC</Text>

        <Text style={estilos.label}>Usuário</Text>
        <TextInput
          style={estilos.input}
          placeholder="ex: peterparker"
          placeholderTextColor="#5c6484"
          autoCapitalize="none"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={estilos.label}>Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="mínimo 4 caracteres"
          placeholderTextColor="#5c6484"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {erro ? <Text style={estilos.erro}>{erro}</Text> : <View style={estilos.espaco} />}

        <TouchableOpacity style={estilos.botao} onPress={entrar}>
          <Text style={estilos.botaoTexto}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={estilos.dica}>Qualquer usuário com senha de 4+ caracteres entra.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: CORES.fundo,
    justifyContent: 'center',
    padding: 24,
  },
  caixa: {
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 16,
    padding: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: CORES.marvel,
    textAlign: 'center',
    letterSpacing: 2,
  },
  logoDc: { color: CORES.dc },
  subtitulo: {
    color: CORES.suave,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 18,
  },
  label: { color: CORES.suave, fontSize: 13, marginTop: 12, marginBottom: 6 },
  input: {
    backgroundColor: '#0f1324',
    borderWidth: 1,
    borderColor: '#2c3355',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: CORES.texto,
  },
  erro: { color: '#ff6b6b', fontSize: 13, marginTop: 12 },
  espaco: { height: 25 },
  botao: {
    backgroundColor: CORES.marvel,
    borderRadius: 8,
    paddingVertical: 13,
    marginTop: 18,
    alignItems: 'center',
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
  dica: { color: '#6e768f', fontSize: 12, textAlign: 'center', marginTop: 16 },
});
