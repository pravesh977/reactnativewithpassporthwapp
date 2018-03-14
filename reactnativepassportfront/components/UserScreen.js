import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class UserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.conditionalLoggedIn = this.conditionalLoggedIn.bind(this);
    }
    conditionalLoggedIn() {
        if(this.props.screenProps.loggedinuser !== null) {
            return (
                <View>
                    <Text>{this.props.screenProps.loggedinuser}</Text>
                </View>
            )
        }
        else return <Text>Not Logged In</Text>
    }
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Separate User Screen</Text>
            <Text>{this.props.screenProps.hello}</Text>
            {this.conditionalLoggedIn()}
        </View>
        );
      }
}


export default UserScreen;