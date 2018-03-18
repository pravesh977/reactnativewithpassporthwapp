import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput } from 'react-native';
//NOTE: Here, instead of passing states from App.js to onChangeText, Just set new states here and then you can do fetch and stuff from here if 
//you dont need to use the button anywhere else and not make the app too scalable. It makes the App.js readable. Then just pass child state as params
//to parents or just create onSubmit function here too with fetch and stuff. 
class AskFormComponent extends React.Component {
    render() {
        return (
          <View style={askform.container}>
             <Text style={{padding: 10, fontSize: 42}}>
                {this.props.screenProps.questiondetails.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
            <TextInput
                style={{height: 30, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8', borderWidth: 0.7, borderColor: 'red', marginBottom: '20%' }}
                placeholder="Subject"
                placeholderTextColor = 'black'
                onChangeText={(questionTitleEnter) => this.props.screenProps.onChangequestiontitle(questionTitleEnter)}
                underlineColorAndroid = "transparent"
            />
            <TextInput
                style={{ textAlign: 'center', fontSize: 22, color: '#4540E8', borderWidth: 0.7, borderColor: 'green'}}
                placeholder="Details"
                multiline = {true}
                numberOfLines = {4}
                placeholderTextColor = 'black'
                onChangeText={(questionDetailsEnter) => this.props.screenProps.onChangequestiondetails(questionDetailsEnter)}
                underlineColorAndroid = "transparent"
                />
            <Text>{this.props.hello}</Text>
            {/* {console.log(this.props.screenProps.registerusername)} */}
          <TouchableHighlight style={{marginTop: 50}} onPress={() => {
              this.props.screenProps.onQuestionSubmit();
            }
          }>
          <View style={{backgroundColor: 'red', borderRadius: 50}}>
          <Text style={{fontSize:40, color: 'cyan'}}>Submit Question</Text>
          </View>
        </TouchableHighlight>
          </View>
        );
      }
}

const askform = StyleSheet.create({
  container: {
  
  },
});

export default AskFormComponent;