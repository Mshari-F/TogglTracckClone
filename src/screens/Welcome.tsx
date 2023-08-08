import { StyleSheet, Text, View } from "react-native";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Toggl Track Clone</Text>
            <Text style={styles.DescText}> Here where you can track and manage your time
            on the tasks that you want to acomplish</Text>
            <Text style={styles.DescText}>Please use the tab bars below to navigate between screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  DescText: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
    textAlign: 'center',

  }
});

  export default Welcome;
