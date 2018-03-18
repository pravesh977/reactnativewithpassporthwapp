import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableHighlight, Alert } from 'react-native';

class ViewAllQuestionsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      allQuestionsLoaded: false,
      allQuestionsData: [],
    }
    this.conditionalAllQuestionsLoaded = this.conditionalAllQuestionsLoaded.bind(this);
  }

  componentDidMount() {
    fetch('http://192.168.1.241:3001/api/homeworkquestions')
    .then((response)=>{
      return response.json()
      }).then((responseJson)=>{
      console.log(responseJson.questionsData, "all Questions ");
      this.setState({
        allQuestionsLoaded: true,
        allQuestionsData: responseJson.questionsData,
      })
    })
  }

conditionalAllQuestionsLoaded() {
  if(this.state.allQuestionsLoaded === true) {
    return (
      <View>
        <FlatList
          data={this.state.allQuestionsData}
          keyExtractor={(item, index)=>index}
          renderItem={({ item }) => (
            <View style={viewquestions.eachquestion}>
              <TouchableHighlight 
              underlayColor = "green"
              onPress={()=> {
                Alert.alert("hello");
                this.props.navigation.navigate('AskComp');


              }}>
                <View>
                 <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.homeworktitle}</Text>
                 <Text style={{fontSize: 24}}>{item.homeworkdetails}</Text>
                </View>
              </TouchableHighlight>
            </View>
          )
        }
        />
      </View>
    )
  }
}

render() {
  return (
    // <ScrollView>
    <View style={viewquestions.container}>
      <Text style={{color: 'white'}}>View all latest questions</Text>
      {this.conditionalAllQuestionsLoaded()}
    </View>
    // </ScrollView>
    );
  }
}

const viewquestions = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 5,
  },
  eachquestion: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 5,
  }
});

export default ViewAllQuestionsComponent;