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

Ao avançarem pelos corredores, encontraram símbolos antigos gravados nas paredes. Nenhum deles compreendia seu significado, mas todos sentiam que aquelas marcas observavam seus movimentos.

A cada passo, o silêncio ficava mais pesado. O ar parecia imóvel, como se o próprio tempo tivesse parado dentro das ruínas.

Então, uma porta colossal surgiu diante deles.

Era feita de pedra negra e coberta por inscrições douradas. No centro havia um círculo vazio, como se algo devesse ser encaixado ali.

Sem perceber, os aventureiros haviam chegado ao coração de Arkhaven.

E o verdadeiro desafio estava apenas começando.
`;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.celular}>
        <View style={styles.notch} />

        <View style={styles.header}>
          <Text style={styles.titulo}>
            O Golem que Busca Pela Iluminação
          </Text>
        </View>

        <ScrollView
          style={styles.contTexto}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.texto}>{historia}</Text>
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite um comentário..."
            placeholderTextColor="#94A3B8"
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },

  celular: {
    width: 360,
    height: 700,
    backgroundColor: "#111827",

    borderRadius: 35,
    overflow: "hidden",

    borderWidth: 8,
    borderColor: "#000",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,

    elevation: 20,
  },

  notch: {
    position: "absolute",
    top: 8,
    alignSelf: "center",

    width: 120,
    height: 20,

    backgroundColor: "#000",
    borderRadius: 20,

    zIndex: 100,
  },

  header: {
    paddingTop: 45,
    paddingBottom: 15,

    backgroundColor: "#1E293B",

    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },

  titulo: {
    color: "#F8FAFC",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 15,
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