import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Entry = ({category, text}) => {
  return (
    <View style={styles.entry}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  entry: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  category: {
    fontSize: 18,
    color: '#888',
  },
  text: {
    fontSize: 21,
    color: '#333',
  },
});
