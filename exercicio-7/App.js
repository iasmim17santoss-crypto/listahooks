import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(true);
  useEffect(() => { if (!rodando) return; const timer = setInterval(() => setSegundos(s => s + 1), 1000); return () => clearInterval(timer); }, [rodando]);
  return <View><Text>{segundos}s</Text><Button title={rodando ? 'Pausar' : 'Retomar'} onPress={() => setRodando(!rodando)} /></View>;
}
