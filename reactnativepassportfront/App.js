import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button } from 'react-native';
import SecuredComponent from './components/SecuredComponent';
import LoggedIn from './components/LoggedIn';
import LoginComponent from './components/LoginComponent';
import { StackNavigator } from 'react-navigation';
import UserComponent from './components/UserComponent';
import MainWelcome from './components/MainWelcome';
import RegisterComponent from './components/RegisterComponent';
import UserScreen from './components/UserScreen';


// import LoginComponent from './components/LoginComponent';

// class MainWelcome extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Welcome Page</Text>
//         <Button
//           title="Login"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//         <Button
//           title="Register"
//           onPress={() => this.props.navigation.navigate('Register')}
//         />
//       </View>
//     );
//   }
// }

// Cant seem to import this LoginScreen component like MainWelcome and RegisterComponent Or I get error.
class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginComponent
          navigation={this.props.navigation}
          hello={this.props.screenProps.hello}
          onLoginSubmit={this.props.screenProps.onLoginSubmit}
          loggedinuser={this.props.screenProps.loggedinuser}
          changingstatefunc={this.props.screenProps.changingstatefunc}
          loginusername={this.props.screenProps.loginusername}
          onChangeLoginUsername={this.props.screenProps.onChangeLoginUsername}
          onChangeLoginPassword={this.props.screenProps.onChangeLoginPassword}
        />
      </View>
    );
  }
}

// class RegisterScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Register Screen</Text>
//         {/* <Button
//           title="Register"
//           onPress={() => this.props.navigation.navigate('UserPage')}
//         /> */}
//       </View>
//     );
//   }
// }

// class UserScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <UserComponent />
//       </View>
//     );
//   }
// }

// const MyUserStackNav = StackNavigator(
//   {
//     UserPage: {
//       screen: UserComponent,
//     },
//   }
// );


const RootStack = StackNavigator(
  {
    Register: { screen: RegisterComponent },
    Login: { screen: LoginScreen },
    // UserStuff: { screen: MyUserStackNav },
    Welcome: { screen: MainWelcome },
    UserPage: { screen: UserScreen }
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  constructor(){
    super();
        this.state = {
                loginusername: '',
                loginpassword: '',
                registerusername: '',
                registerpassword: '',
                isloggedin: false,
                loggedinuser: null,
                randomState: null,
        }
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.changingstatefunc = this.changingstatefunc.bind(this);
    this.onChangeRegisterUsername = this.onChangeRegisterUsername.bind(this);
    this.onChangeRegisterPassWord = this.onChangeRegisterPassWord.bind(this);
    this.onChangeLoginUsername = this.onChangeLoginUsername.bind(this);
    this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);

    // this.conditionalrenderloggedin = this.conditionalrenderloggedin.bind(this);      
  }

  changingstatefunc(cool) {
    this.setState ({
      randomState: cool,
    })
  }

  onChangeRegisterUsername(registerUserName) {
    this.setState({
      registerusername: registerUserName,
    })
    // console.log(this.state.registerusername, "username stae")
  }

  onChangeRegisterPassWord(registerPassWord) {
    this.setState({
      registerpassword: registerPassWord,
    })
    // console.log(this.state.registerpassword, "user pass")
  }
  onChangeLoginUsername(loginUserName) {
    this.setState({
      loginusername: loginUserName,
    })
    console.log(this.state.loginusername, "username stae")
  }

  onChangeLoginPassword(loginPassWord) {
    this.setState({
      loginpassword: loginPassWord,
    })
    console.log(this.state.loginpassword, "user pass")
  }

  onRegisterSubmit() {
    fetch('http://192.168.1.241:3001/authroutes/register', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.registerusername,
        password: this.state.registerpassword,
      }),
    }).then((response)=>{
      return response.json()
    }).then((responseJson)=>{
      console.log(responseJson, "userdatra");
      this.setState({loggedinuser: responseJson.userInfo.username})
    })
    console.log("registered username", this.state.registerusername);
    console.log("registered password", this.state.registerpassword);
    // console.log(this.state.randomState, "random state")
  }

  onLoginSubmit() {
    fetch('http://192.168.1.241:3001/authroutes/login', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.loginusername,
        password: this.state.loginpassword,
      }),
    }).then((response)=>{
      return response.json()
    }).then((responseJson)=>{
      console.log(responseJson, "userdatra");
      this.setState({loggedinuser: responseJson.userInfo.username})
    })
    // console.log("hello ashoer");
    console.log("username", this.state.loginusername);
    console.log("password", this.state.loginpassword);
    // console.log(c, "slkdjf");
    // console.log(this.state.randomState, "random state")
  }

  render() {
    return (
    <RootStack 
      screenProps = {{
        hello: "this is a screen prop",
        isloggedin: this.state.isloggedin,
        loggedinuser: this.state.loggedinuser,
        onLoginSubmit: this.onLoginSubmit,
        changingstatefunc: this.changingstatefunc,
        onChangeRegisterUsername: this.onChangeRegisterUsername,
        onChangeRegisterPassWord: this.onChangeRegisterPassWord,
        onChangeLoginUsername: this.onChangeLoginUsername,
        onChangeLoginPassword: this.onChangeLoginPassword,
        onRegisterSubmit: this.onRegisterSubmit,
        loginusername: this.loginusername,
        registerusername: this.state.registerusername,
      }}
    />
    );
  }
}

