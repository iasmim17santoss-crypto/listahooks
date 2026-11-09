import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
export default function App() {
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState('');
  useEffect(() => {
    let ativo = true;
    if (!texto.trim()) { setResultados([]); setErro(''); return; }
    const timer = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => { if (!r.ok) throw new Error('Falha na busca'); return r.json(); })
        .then(dados => { if (ativo) setResultados(dados.filter(u => u.name.toLowerCase().includes(texto.toLowerCase()))); })
        .catch(e => { if (ativo) setErro(e.message); });
    }, 500);
    return () => { ativo = false; clearTimeout(timer); };
  }, [texto]);
  return <View><TextInput placeholder="Buscar usuÃ¡rios" value={texto} onChangeText={setTexto} />{erro ? <Text>{erro}</Text> : null}<FlatList data={resultados} keyExtractor={item => String(item.id)} renderItem={({ item }) => <Text>{item.name}</Text>} /></View>;
}
