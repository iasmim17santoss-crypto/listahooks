import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
  const [valor, setValor] = useState(0);
  const titulo = `Valor: ${valor}`;
  const aumentar = () => { console.log('Novo valor:', valor + 1); setValor(valor + 1); };
  return <View><Text>{titulo}</Text><Button title="+1" onPress={aumentar} /></View>;
}
