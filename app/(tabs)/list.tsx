import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// import dataErrado from '@/constants/dataErrado.json'
import data from '@/constants/data';
import { Item } from '@/components/item';

export default function List() {
  return (
  <>
   <View style={styles.center}>
      <Text>Lista</Text>
   </View>
   <SafeAreaView>
    <FlatList data={data} renderItem={({item}) => (
      <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem}/>
    )} keyExtractor={(item) => item.id}>
      
    </FlatList>
   </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create ({
  center:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    paddingVertical: 20
  },
  container: {
    flex: 1
  },
  back:{
    paddingHorizontal: 20
  }
})