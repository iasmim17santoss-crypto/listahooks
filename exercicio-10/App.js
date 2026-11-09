import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
  const [valor, setValor] = useState(0);
  const [titulo, setTitulo] = useState('Valor: 0');
  useEffect(() => { console.log('Novo valor:', valor); setTitulo(`Valor: ${valor}`); }, [valor]);
  return <View><Text>{titulo}</Text><Button title="+1" onPress={() => setValor(valor + 1)} /></View>;
}
