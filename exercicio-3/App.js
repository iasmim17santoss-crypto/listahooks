import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
  const [visivel, setVisivel] = useState(false);
  return <View><Button title="Mostrar / Esconder" onPress={() => setVisivel(!visivel)} />{visivel && <Text>VocÃª encontrou o segredo!</Text>}</View>;
}
