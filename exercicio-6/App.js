import React, { useEffect } from 'react';
import { Text } from 'react-native';
export default function App() {
  useEffect(() => { console.log('Componente montado'); return () => console.log('Componente desmontado'); }, []);
  return <Text>OlÃ¡</Text>;
}
