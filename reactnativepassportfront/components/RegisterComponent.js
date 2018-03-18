import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';

class RegisterComponent extends React.Component {
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
        <View style={{ flex: 1 }}>
            <Text>Register Screen yayaya</Text>
            <Text>{this.props.screenProps.hello}</Text>
            <TextInput
                    style={{height: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8'}}
                    placeholder="Username"
                    placeholderTextColor = 'black'
                    onChangeText={(registerusername) => this.props.screenProps.onChangeRegisterUsername(registerusername)}
                    underlineColorAndroid = "transparent"
                />
          <TextInput
                    style={{height: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8'}}
                    placeholder="Password"
                    placeholderTextColor = 'black'
                    onChangeText={(registerpassword) => this.props.screenProps.onChangeRegisterPassWord(registerpassword)}
                    underlineColorAndroid = "transparent"
                />
            <Text>{this.props.hello}</Text>
            {/* {console.log(this.props.screenProps.registerusername)} */}
          <TouchableHighlight style={{marginTop: 50}} onPress={() => {
            this.props.screenProps.onRegisterSubmit();
            this.props.navigation.navigate("UserPage");
            }
          }>
          <View style={{backgroundColor: 'red', borderRadius: 50}}>
          <Text style={{fontSize:40, color: 'cyan'}}>Register</Text>
          </View>
        </TouchableHighlight>
            {this.conditionalLoggedIn()}
            <Text>
                {this.props.screenProps.registerusername.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
        );
      }
}


export default RegisterComponent;