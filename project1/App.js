import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './src/components/HelloWorld';
import SayMyName from './src/components/SayMyName'
import Pessoa from './src/components/Pessoa';
import './src/index.css'
import List from './src/components/List';

export default function App() {

  const nome = 'Maria'

  return (
    <div className='App'>
    <HelloWorld/>
    <SayMyName nome="Joao"/>
    <SayMyName nome={nome}/>
    <Pessoa nome='Rodrigo' idade="23" profissao="Professor" foto='https://50px.co/wp-content/uploads/2018/10/50px.gif'/>
    <List/>
    
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
