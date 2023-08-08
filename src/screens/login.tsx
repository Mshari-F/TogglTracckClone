import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';


const Stack = createStackNavigator();

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
const [showPassword, setShowPassword] = useState(false);
 const navigation = useNavigation();

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateForm(text, password);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validateForm(email, text);
  };

  const validateForm = (email: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;
    setIsFormValid(isEmailValid && isPasswordValid);
  };

  const handleLogin = () => {
  // Add your login logic here
  console.log('Email:', email);
  console.log('Password:', password);

  navigation.navigate('Home' as never); // Update the screen name to 'Home'

};


  const handleForgotPassword = () => {
    Linking.openURL('https://toggl.com/track/forgot-password/');
  };
const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={styles.container}>
         <Text style={styles.welcomeText}>Welcome to Toggl Track Clone</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={!showPassword}
      />
        <Button
          title={showPassword ? 'Hide Password' : 'Show Password'}
          onPress={toggleShowPassword}
          color="#7615D1"
        />
            <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
          color="#24a0ed"
          disabled={!isFormValid}
        />
        <Button
          title="Forgot Password"
          onPress={handleForgotPassword}
          color="#7615D1"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'darkpurple', // Set the background color to darkpurple
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ddd',
  },
    buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16, // Add margin between the buttons and the text inputs
    width: '100%',
  },
});
