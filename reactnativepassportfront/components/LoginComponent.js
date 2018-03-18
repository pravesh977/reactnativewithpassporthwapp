import React from 'react';
import LoggedIn from './LoggedIn';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, StackNavigator, Button } from 'react-native';

class LoginComponent extends React.Component {

  render() {
    return (
    <View>
      <Text style={headerstyle.container}>Please Log In</Text>
         <View>
           <TextInput
                    style={{height: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8' }}
                    placeholder="Username"
                    placeholderTextColor = 'black'
                    onChangeText={(loginusername) => this.props.onChangeLoginUsername(loginusername)}
                    underlineColorAndroid = "transparent"
                />
          <TextInput
                    style={{height: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8'}}
                    placeholder="Password"
                    placeholderTextColor = 'black'
                    onChangeText={(loginpassword) => this.props.onChangeLoginPassword(loginpassword)}
                    underlineColorAndroid = "transparent"
                />
            <Text>{this.props.hello}</Text>
          <TouchableHighlight style={{marginTop: 50}} onPress={() => {
            // this.setState({randomState: "hey boy hey girl"})
            this.props.changingstatefunc("hottie");
            this.props.onLoginSubmit();           
            // this.setState({isloggedin: true})
            console.log(this.props.loggedinuser, "username state");
            // console.log(this.props.screenProps.navigation, "nav props");
            //this.props.navigation.navigate("UserPage");
            if(this.props.loggedinuser !== undefined) {
              this.props.navigation.navigate("UserPage");
            } else {
              console.log("IMPOSTER");
            }
          }
          }>
          <View style={{backgroundColor: 'red', borderRadius: 50}}>
          <Text style={{fontSize:40, color: 'cyan'}}>Login</Text>
          </View>
        </TouchableHighlight>
        </View>
        {/* <Text style={{padding: 10, fontSize: 42}}>
          {this.props.loginusername.split(' ').map((word) => word && '🍕').join(' ')}
          {console.log(this.props.loginusername, "staterer?")}
        </Text> */}
        {/* {this.conditionalrenderloggedin()}  */}
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

export default LoginComponent;

