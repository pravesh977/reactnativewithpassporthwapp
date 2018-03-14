import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SecuredPage extends React.Component {
  render() {
    return (
    <View>
      <Text style={headerstyle.container}>This is a secured component</Text>
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

export default SecuredPage;