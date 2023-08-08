import React, {useState} from 'react';
import { View,StyleSheet,TouchableOpacity,Text,TextInput } from 'react-native';
import {Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useTaskContext} from '../context/TaskContext';

const CreateTaskScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const {addTask} = useTaskContext();

const handleStartTimeChange = (event: any, selectedTime: Date | undefined) => {
  const currentTime = selectedTime || startTime;
  setShowStartTimePicker(false);
  setStartTime(currentTime || new Date());
};

const handleEndTimeChange = (event: any, selectedTime: Date | undefined) => {
  const currentTime = selectedTime || endTime;
  setShowEndTimePicker(false);
  setEndTime(currentTime || new Date());
};


  const formatTime = (time: Date) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const isFormValid = () => {
    return (
      (taskName !== '' && taskDescription !== '')
    );
  };

  const handleCreateTask = () => {
    if (isFormValid()) {
      const newTask = {
        id: Date.now(),
        title: taskName,
        description: taskDescription,
        startTime: startTime,
        endTime: endTime,
      };

      if (addTask) {
        addTask(newTask);
      }

      setTaskName('');
      setTaskDescription('');
      setStartTime(new Date());
      setEndTime(new Date());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input]}
        placeholder="Enter a Task Name!"
        value={taskName}
        onChangeText={text => { setTaskName(text); }}
        autoCorrect={false}
        maxLength={100}
      />

      <TextInput
        style={[ styles.input]}
        placeholder="Enter A Description For the Task!"
        value={taskDescription}
        onChangeText={text => { setTaskDescription(text); }}
        autoCorrect={false}
        multiline
        maxLength={300}
      />
      <TouchableOpacity
        onPress={() => setShowStartTimePicker(true)}
        style={styles.TimePicker}>
        <Button style={styles.TimeButton} labelStyle={styles.ButtonText}>
          Start Time: {formatTime(startTime)}
        </Button>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowEndTimePicker(true)}
        style={styles.TimePicker}>
        <Button style={styles.TimeButton} labelStyle={styles.ButtonText}>
          Finish Time: {formatTime(endTime)}
        </Button>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.Createbutton,
          {
            backgroundColor: !isFormValid() ? colors.secondary : colors.primary,
          },
        ]}
        onPress={handleCreateTask}
        disabled={!isFormValid()}>
        <Text style={styles.ButtonText}>Create New Task</Text>
      </TouchableOpacity>

      {showStartTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleStartTimeChange}
        />
      )}

      {showEndTimePicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleEndTimeChange}
        />
      )}
    </View>
  );
};
const colors = {
  primary: '#24a0ed',
  secondary: '#bcbcbc',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TimePicker: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  TimeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7615D1',
    borderRadius: 0,
    color: 'white',
  },
  ButtonText: {
    color: 'white',
  },
  Createbutton: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginStart: 10,
    color: '#24a0ed',
  },
});

export default CreateTaskScreen;
