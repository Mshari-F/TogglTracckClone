/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TasksListScreen from './TaskListScreen';
import CreateTaskScreen from './CreateTaskScreen';
import Welcome from './Welcome';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="Welcome">
            <Tab.Screen
        name="Home"
        component={Welcome}
      />
      <Tab.Screen
        name="Tasks List"
        component={TasksListScreen}
      />
      <Tab.Screen
        name="Create task"
        component={CreateTaskScreen}
      />
    </Tab.Navigator>
  );
};

export default Home;

