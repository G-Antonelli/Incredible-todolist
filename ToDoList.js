import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  const tasks = [
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ];

  return (
    <ScrollView style={styles.taskContainer}>
      {tasks.map((task) => (
        <View key={task.id} style={[styles.task, task.completed && styles.completed]}>
          <Text style={styles.taskText}>{task.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    marginVertical: 20,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    textDecorationLine: 'line-through',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
