import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <scrollView style={styles.fundo}>
      <view>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </view>
      <view>
      <Button onPress={() => {setIsHungry (false);}} title={'Babosa'}>

      </button>

    <Button onPress={() => {setIsHungry (false);}} title={'Babosa'}>
        
      </button>

      <Button onPress={() => {setIsHungry (false);}} title={'Babosa'}>
        
      </button>
      
      </view>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgb(0, 255, 0)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
