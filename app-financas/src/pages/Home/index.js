import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Acoes from '../../components/Acoes';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '500,00',
    date: '21/03/2023',
    type: 0, // gastos
  },
  {
    id: 2,
    label: 'Pix do Cliente Y',
    value: '5.000,00',
    date: '25/03/2023',
    type: 1, // receitas
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '27/03/2023',
    type: 1, // receitas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="André Speltz" />
      <Balance saldo="10.000,00" gastos="-5.500,00" />
      <Acoes />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
