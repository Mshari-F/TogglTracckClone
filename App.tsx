import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/screens/login';
import Home from './src/screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProvider } from './src/context/TaskContext';





const Stack = createStackNavigator();


function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    checkStoredUserData();
  }, []);

  const checkStoredUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString !== null) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
      <TaskProvider>
          <NavigationContainer>
            <Stack.Navigator>
              { userLoggedIn ?
                (
                  <>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{ headerShown: false }}
                  />
                  </>
                ) :
                (
                  <>
                    <Stack.Screen
                      name="LoginPage"
                      component={LoginPage}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ headerShown: false }}
                    />
                  </>
             )}
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
