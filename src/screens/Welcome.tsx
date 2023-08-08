import { StyleSheet, Text, View } from "react-native";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Toggl Track Clone</Text>
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
  }});

  export default Welcome;
