import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

class SingleComponent extends React.Component {
    render() {
        return (
          <View style={singlestyle.container}>
            <Text>Single Questions PAge</Text>
            <Text>Question Id: {this.props.navigation.state.params.itemId}</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>{this.props.navigation.state.params.itemHomeWorkTitle}</Text>
            <Text>{this.props.navigation.state.params.itemDetails}</Text>
            <Text>Asked By: {this.props.navigation.state.params.itemUserName}</Text>
            <Text>User Id: {this.props.navigation.state.params.itemUserId}</Text>
            {/* {console.log("holla holla", this.props.navigation)} */}
          </View>
        );
      }
}

const singlestyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SingleComponent;