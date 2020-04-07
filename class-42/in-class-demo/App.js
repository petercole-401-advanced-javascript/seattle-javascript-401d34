import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Entry from './components/Entry';
import { useForm, Controller } from 'react-hook-form';

const App = () => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { control, handleSubmit, errors } = useForm();

  const fetchData = async () => {
    try {
      setTimeout(async () => {
        const raw = await fetch('http://localhost:3001/entries');
        const data = await raw.json();
        setEntries(data);
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  //   <TextInput
  //   placeholder="Type here to add a new entry…"
  //   onChangeText={(text) => setNewEntry(text)}
  //   onEndEditing={() =>
  //     setEntries([
  //       {
  //         id: Math.random().toString(),
  //         category: 'new',
  //         text: newEntry,
  //       },
  //       ...entries,
  //     ])
  //   }
  // />

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Category</Text>
        <Controller
          as={TextInput}
          control={control}
          name="category"
          onChange={(args) => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.category && <Text>Category is required</Text>}

        <Text style={styles.text}>Text</Text>
        <Controller
          as={TextInput}
          control={control}
          name="text"
          onChange={(args) => args[0].nativeEvent.text}
          defaultValue=""
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Create New Entry</Text>
        </TouchableOpacity>
      </View>
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
  },
  text: {
    fontSize: 24,
    color: '#999',
  },
  button: {
    backgroundColor: '#baddad',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});
