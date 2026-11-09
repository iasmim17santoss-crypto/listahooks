import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
export default function App() {
  const [nome, setNome] = useState('');
  return <View><TextInput placeholder="Digite seu nome" value={nome} onChangeText={setNome} /><Text>OlÃ¡, {nome}!</Text></View>;
}
