import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";

const historia = `
As ruínas de Arkhaven permaneciam silenciosas há séculos. As paredes de pedra estavam cobertas por musgo e marcas deixadas pelo tempo, enquanto a névoa escondia os corredores que se estendiam para o interior da antiga cidade.

Muitos aventureiros tentaram explorar aquelas ruínas em busca dos tesouros perdidos do antigo reino, mas poucos retornaram. Histórias falavam sobre guardiões adormecidos, mecanismos esquecidos e criaturas que vagavam pelos salões abandonados.

Naquela manhã, porém, um grupo de exploradores decidiu desafiar as lendas. Armados apenas com coragem e curiosidade, eles atravessaram os portões quebrados sem imaginar que despertariam segredos capazes de mudar o destino de todo o continente.

O vento atravessou as colunas destruídas enquanto os primeiros passos ecoavam pela escuridão. A aventura havia começado.
`;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.titulo}>
          O Golem que Busca Pela Iluminação
        </Text>
      </View>

      <ScrollView
        style={styles.contTexto}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.texto}>{historia}</Text>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite um comentário..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  header: {
    paddingTop: 55,
    paddingBottom: 20,
    backgroundColor: "#1E293B",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },

  titulo: {
    color: "#F8FAFC",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  contTexto: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
  },

  texto: {
    color: "#E2E8F0",
    fontSize: 17,
    lineHeight: 30,
    textAlign: "justify",
  },

  inputContainer: {
    padding: 12,
    backgroundColor: "#1E293B",
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },

  input: {
    height: 50,
    backgroundColor: "#334155",
    borderRadius: 14,
    paddingHorizontal: 15,
    color: "#FFFFFF",
    fontSize: 16,
  },
});