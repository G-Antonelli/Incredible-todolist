import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';  // Import ToDoList component
import ToDoForm from './ToDoForm';  // Import ToDoForm component

export default function App() {
  return (
    <View style={styles.container}>
      {/* Replace hardcoded ScrollView with ToDoList component */}
      <ToDoList />

      {/* Replace hardcoded form with ToDoForm component */}
      <ToDoForm />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
});
