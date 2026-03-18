import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ( {navigation}) => {
         const handleLogin = () => {
       // Navigate to Home screen
       navigation.navigate("HomeScreen");
     };

  return (
        <View style={styles.container}>
      <Text> </Text>
      <TextInput style={styles.input}/>

      <TextInput style={styles.input}/>
      <TouchableOpacity 
      style={styles.button}
      onPress={handleLogin}
      >Login </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
     borderColor: "black",
     borderWidth: 5, 
     borderRadius: 8, 
     width: '80%',
     marginTop: 5
  },
  button: {
    width: '80%',
    height: 50, 
    backgroundColor: "blue"
  }
});
export default LoginScreen;


