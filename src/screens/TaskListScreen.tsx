import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {Text, Card, Button} from 'react-native-paper';
import {useTaskContext} from '../context/TaskContext';

const TaskListScreen = () => {
  const {tasks, deleteTask} = useTaskContext();

  const calculateDuration = (startTime: Date, endTime: Date) => {
    const diff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  type Task = {
    id: number;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
  };

  const renderItem = ({item}: {item: Task}) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.CardText}>Name: {item.title}</Text>
        <Text style={styles.CardText}>Description: {item.description}</Text>
        <Text style={styles.CardText}>Duration: {calculateDuration(item.startTime, item.endTime)}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
        style ={styles.DeleteButton}
          labelStyle={styles.DeleteText}
          onPress={() => handleDeleteTask(item.id)}>
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <>
          <Text style={styles.NoText}>Empty Task List</Text>
        </>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  CardText : {
    color: 'white',
    fontSize: 18,
    fontFamily: 'bold'
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#7615D1',
    borderRadius: 0,
  },
  DeleteButton: {
    color: 'white',
    backgroundColor: '#cc0000',
    borderRadius: 0,
  },
  DeleteText: {
    color: 'white',
  },
  NoText: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 100,
  },
});

export default TaskListScreen;
