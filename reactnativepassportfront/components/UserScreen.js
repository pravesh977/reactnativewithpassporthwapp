// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// class UserScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.conditionalLoggedIn = this.conditionalLoggedIn.bind(this);
//     }
//     conditionalLoggedIn() {
//         if(this.props.screenProps.loggedinuser !== null) {
//             return (
//                 <View>
//                     <Text>Hello, Welcome {this.props.screenProps.loggedinuser}</Text>
//                 </View>
//             )
//         }
//         else return <Text>Not Logged In</Text>
//     }
//     render() {
//         return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//              {this.conditionalLoggedIn()}
//             <Text>Redirect to New page Ask Question Button</Text>
//             <Text>{this.props.screenProps.hello}</Text>
//             <Text>Fetch and Show Category and all Questions</Text>  
//         </View>
//         );
//       }
// }


// export default UserScreen;

import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ViewAllQuestionsComponent from './ViewAllQuestionsComponent';
import MyQuestionsComponent from './MyQuestionsComponent';
import ProfileComponent from './ProfileComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default UserScreen = TabNavigator({
  AllQuestionsScreen: { 
      screen: ViewAllQuestionsComponent,
      navigationOptions: {
        tabBarLabel: 'All Questions',
        tabBarIcon: ({ tintColor, focused } )=>(
          <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
        ),
      }, 
    },
  MyQuestionsScreen: { 
      screen: MyQuestionsComponent,
      navigationOptions: {
        tabBarLabel: 'My Questions',
        tabBarIcon: ({ tintColor, focused } )=>(
          <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
        ),
      }, 
     },
  ProfileScreen: { 
      screen: ProfileComponent,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused } )=>(
          <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
        ),
      }, 
     },
    },
    {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
      labelStyle: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: '#2FC8FF',
      },
    },
  }
);