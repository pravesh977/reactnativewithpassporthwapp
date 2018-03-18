import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

class ProfileComponent extends React.Component {
    render() {
        return (
          <View style={myprofile.container}>
            <Text>This is your profile screen</Text>
            <Text>Hello, {this.props.screenProps.loggedinuser}</Text>
            <Text>Ask Button</Text>
            <Text>Log Out Button</Text>
            <TouchableHighlight style={{marginTop: 50}} onPress={() => {
              this.props.navigation.navigate('AskComp');
              }
            }>
          <View style={{backgroundColor: 'orange', borderRadius: 50}}>
            <Text style={{fontSize:40, color: 'cyan'}}>Ask</Text>
          </View>
        </TouchableHighlight>
          </View>
        );
      }
}

const myprofile = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileComponent;