import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    {name: 'Item1'},
    {name: 'Item2'},
    {name: 'Item3'},
    {name: 'Item4'},
    {name: 'Item5'},
    {name: 'Item6'},
    {name: 'Item7'},
    {name: 'Item8'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      style={styles.body}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>test</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={Refreshing} colors={['red']} />
      }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl refreshing={Refreshing} colors={['red']} />
    //   }>
    //   {Items.map(i => {
    //     return (
    //       <View style={styles.item} key={i.key}>
    //         <Text style={styles.text}>{i.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#c4ab7f',
    flexDirection: 'column',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    marginTop: 20,
    height: 200,
    width: 200,
  },
  item: {
    margin: 10,
    backgroundColor: '#615440',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
