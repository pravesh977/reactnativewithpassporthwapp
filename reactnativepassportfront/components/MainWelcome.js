import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MainWelcome extends React.Component {
    render() {
        return (
          <View style={mainwelcome.container}>
            <Text>Hello, Thank you for using my App :)</Text>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate("Login")}
            />
            <Text>Haven't Signed up for a Username yet?</Text>
            <Button
              title="Register"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        );
      }
}

const mainwelcome = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainWelcome;