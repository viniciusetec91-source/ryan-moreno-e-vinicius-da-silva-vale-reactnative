# HQ Marvel & DC (ComicVerse)

App React Native (Expo) com duas telas — Login e Home — usando Stack Navigator.

## Estrutura

```
hqapp/
  App.js                  -> Stack Navigator (Login -> Home)
  src/screens/Login.js    -> tela de login com validação
  src/screens/Home.js     -> tela home com a lista de heróis (FlatList)
  src/data/herois.js      -> dados dos heróis Marvel/DC e paleta de cores
```

## Como criar/rodar pelo terminal

```bash
npx create-expo-app hqapp --template blank
cd hqapp
npx expo install @react-navigation/native @react-navigation/native-stack \
  react-native-screens react-native-safe-area-context
npm start          # ou: npm run web / npm run android
```

## Navegação

`App.js` cria o stack com `createNativeStackNavigator()`:

- `Login` (sem header) -> `navigation.replace('Home', { usuario })` após validar usuário (3+ caracteres) e senha (4+ caracteres).
- `Home` recebe o usuário por `route.params`, lista os heróis com busca, filtro Marvel/DC e modal de detalhes; o botão "Sair" volta para `Login`.
