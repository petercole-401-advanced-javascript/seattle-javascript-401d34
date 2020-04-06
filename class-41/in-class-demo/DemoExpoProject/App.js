import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Entry from './components/Entry';

const App = () => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState([
    {
      id: '1',
      category: 'tech',
      text:
        'React Native is pretty darn cool! I hope to continue to learn it blah blah blah blah blah',
    },
    {
      id: '2',
      category: 'sports',
      text:
        'The best place to go trout fishing in the Yukon Territory is in the Liard River.',
    },
    {
      id: '3',
      category: 'sports',
      text:
        "Since there are no live sports happening right now, you should all check out Jelle's Marble Runs on YouTube for the very latest in marble sports",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type here to add a new entry…"
        onChangeText={(text) => setNewEntry(text)}
        onEndEditing={() =>
          setEntries([
            { id: Math.random().toString(), category: 'new', text: newEntry },
            ...entries,
          ])
        }
      />
      <Text style={styles.text}>Journal Entries</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Entry category={item.category} text={item.text} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    color: '#999',
  },
});
