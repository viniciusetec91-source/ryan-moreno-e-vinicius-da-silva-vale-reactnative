import { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CORES, HEROIS } from '../data/herois';

const EDITORAS = ['Todos', 'Marvel', 'DC'];

export default function Home({ navigation, route }) {
  const usuario = route.params?.usuario ?? 'visitante';
  const [busca, setBusca] = useState('');
  const [editora, setEditora] = useState('Todos');
  const [selecionado, setSelecionado] = useState(null);

  const lista = useMemo(() => {
    const texto = busca.toLowerCase();
    return HEROIS.filter((h) => editora === 'Todos' || h.editora === editora)
      .filter(
        (h) =>
          h.nome.toLowerCase().includes(texto) ||
          h.alterEgo.toLowerCase().includes(texto)
      )
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [busca, editora]);

  function sair() {
    navigation.replace('Login');
  }

  function renderItem({ item }) {
    const cor = item.editora === 'Marvel' ? CORES.marvel : CORES.dc;
    return (
      <TouchableOpacity
        style={[estilos.item, { borderLeftColor: cor }]}
        onPress={() => setSelecionado(item)}
      >
        <Text style={[estilos.tag, { backgroundColor: cor }]}>{item.editora}</Text>
        <Text style={estilos.nome}>{item.nome}</Text>
        <Text style={estilos.alterEgo}>
          {item.alterEgo} · {item.ano}
        </Text>
        <View style={estilos.barra}>
          <View style={[estilos.barraValor, { width: `${item.poder}%`, backgroundColor: cor }]} />
        </View>
        <Text style={estilos.poder}>Nível de poder: {item.poder}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={estilos.tela}>
      <StatusBar style="light" />

      <View style={estilos.topo}>
        <Text style={estilos.saudacao}>Olá, {usuario}</Text>
        <TouchableOpacity style={estilos.botaoSair} onPress={sair}>
          <Text style={estilos.botaoSairTexto}>Sair</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar herói..."
        placeholderTextColor="#5c6484"
        value={busca}
        onChangeText={setBusca}
      />

      <View style={estilos.chips}>
        {EDITORAS.map((nome) => (
          <TouchableOpacity
            key={nome}
            style={[estilos.chip, editora === nome && estilos.chipAtivo]}
            onPress={() => setEditora(nome)}
          >
            <Text style={[estilos.chipTexto, editora === nome && estilos.chipTextoAtivo]}>
              {nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={estilos.contador}>{lista.length} herói(s) na lista</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={estilos.listaConteudo}
        ListEmptyComponent={<Text style={estilos.vazio}>Nenhum herói encontrado.</Text>}
      />

      <Modal visible={!!selecionado} transparent animationType="fade">
        <View style={estilos.modalFundo}>
          <View style={estilos.modalCaixa}>
            <Text style={estilos.modalTitulo}>{selecionado?.nome}</Text>
            <Text style={estilos.modalLinha}>Identidade: {selecionado?.alterEgo}</Text>
            <Text style={estilos.modalLinha}>Editora: {selecionado?.editora}</Text>
            <Text style={estilos.modalLinha}>Primeira aparição: {selecionado?.ano}</Text>
            <Text style={estilos.modalLinha}>Nível de poder: {selecionado?.poder}/100</Text>
            <Text style={estilos.modalLinha}>
              Habilidades: {selecionado?.poderes.join(', ')}
            </Text>
            <TouchableOpacity style={estilos.modalBotao} onPress={() => setSelecionado(null)}>
              <Text style={estilos.botaoTexto}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: CORES.fundo, padding: 16 },
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  saudacao: { color: CORES.texto, fontSize: 16 },
  botaoSair: {
    borderWidth: 1,
    borderColor: CORES.marvel,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  botaoSairTexto: { color: CORES.marvel, fontSize: 13 },
  busca: {
    backgroundColor: '#0f1324',
    borderWidth: 1,
    borderColor: '#2c3355',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: CORES.texto,
  },
  chips: { flexDirection: 'row', gap: 8, marginTop: 12 },
  chip: {
    borderWidth: 1,
    borderColor: '#2c3355',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chipAtivo: { backgroundColor: CORES.dc, borderColor: CORES.dc },
  chipTexto: { color: CORES.suave, fontSize: 13 },
  chipTextoAtivo: { color: '#fff' },
  contador: { color: CORES.suave, fontSize: 12, marginVertical: 10 },
  listaConteudo: { paddingBottom: 24, gap: 12 },
  item: {
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: '#242a45',
    borderLeftWidth: 5,
    borderRadius: 12,
    padding: 14,
  },
  tag: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nome: { color: CORES.texto, fontSize: 17, fontWeight: 'bold', marginTop: 6 },
  alterEgo: { color: CORES.suave, fontSize: 13, marginTop: 2 },
  barra: {
    height: 7,
    backgroundColor: '#0f1324',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
  },
  barraValor: { height: '100%' },
  poder: { color: CORES.suave, fontSize: 11, marginTop: 5 },
  vazio: { color: CORES.suave, textAlign: 'center', marginTop: 40 },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 24,
  },
  modalCaixa: {
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: '#2c3355',
    borderRadius: 14,
    padding: 22,
  },
  modalTitulo: { color: CORES.texto, fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  modalLinha: { color: CORES.suave, fontSize: 14, marginTop: 4 },
  modalBotao: {
    backgroundColor: CORES.dc,
    borderRadius: 8,
    paddingVertical: 11,
    marginTop: 18,
    alignItems: 'center',
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
});
