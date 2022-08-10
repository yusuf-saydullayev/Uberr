import { Text, StyleSheet, View } from 'react-native'

const Error = ({ message }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Error}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  button: {
    width: '70%',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  }
});

export default Error