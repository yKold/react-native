import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './src/components/HelloWorld';
import Frase from './src/components/Frase'

export default function App() {
  const name = 'Gabriel'
  const newName = name.toUpperCase()

  function sum(x, y){
    return (x + y)
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='app'>
      <h1>Olá React!</h1>
      <p>Meu primeiro app</p>
      <p>Olá {newName}</p>
      <p>Soma: {sum(1, 4)}</p>
      <img src={url}/>
      <p>{HelloWorld('Gabriel')}</p>
      <Frase/>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
