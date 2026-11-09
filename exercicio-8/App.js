import React, { useState, useEffect } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
export default function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    let ativo = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => { if (!r.ok) throw new Error('Falha na busca'); return r.json(); })
      .then(d => { if (ativo) setDados(d); })
      .catch(e => { if (ativo) setErro(e.message); })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, []);
  if (carregando) return <ActivityIndicator />;
  if (erro) return <Text>Erro: {erro}</Text>;
  return <FlatList data={dados} keyExtractor={item => String(item.id)} renderItem={({ item }) => <Text>{item.name}</Text>} />;
}
