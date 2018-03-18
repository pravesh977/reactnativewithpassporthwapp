import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

class SingleComponent extends React.Component {
    render() {
        return (
          <View style={singlestyle.container}>
            <Text>Single Questions PAge</Text>
            <Text>{this.props.navigation.state.params.itemId}</Text>
            <Text>{this.props.navigation.state.params.itemHomeWorkTitle}</Text>
            <Text>{this.props.navigation.state.params.itemDetails}</Text>
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