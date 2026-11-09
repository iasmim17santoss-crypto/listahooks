import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');
  const adicionar = () => { if (!texto.trim()) return; setTarefas([...tarefas, texto]); setTexto(''); };
  const remover = index => setTarefas(tarefas.filter((_, i) => i !== index));
  return <View><TextInput placeholder="Nova tarefa" value={texto} onChangeText={setTexto} /><Button title="Adicionar" onPress={adicionar} /><FlatList data={tarefas} keyExtractor={(_, i) => String(i)} renderItem={({ item, index }) => <View><Text>{item}</Text><Button title="Remover" onPress={() => remover(index)} /></View>} /></View>;
}
