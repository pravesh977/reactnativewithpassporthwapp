import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoggedIn extends React.Component {
  render() {
    return (
    <View>
      <Text style={headerstyle.container}>This is a logged in component</Text>
      <Text>{this.props.loggedinuser}</Text>
    </View>
    );
  }
}

const headerstyle = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
});

export default LoggedIn;