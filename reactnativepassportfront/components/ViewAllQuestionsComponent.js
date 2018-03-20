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
    this.checkloginuserandposteduser = this.checkloginuserandposteduser.bind(this);
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

checkloginuserandposteduser(sentusername) {
  if (sentusername === this.props.screenProps.loggedinuser) {
    return (
      <View>
      <Text>MATCH FOUND EDIT THIS</Text>
      <Text>MATCH FOUND DELETE THIS</Text>
      </View>
    )
  }
}

conditionalAllQuestionsLoaded() {
  if(this.state.allQuestionsLoaded === true && this.props.screenProps.loggedinuser !== null) {
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
                // Alert.alert("hello");
                this.props.navigation.navigate('SinglePage', {
                  itemId: item.id,
                  itemHomeWorkTitle: item.homeworktitle,
                  itemDetails: item.homeworkdetails,
                  itemUserName: item.username,
                  itemUserId: item.user_id,
                });
              }}>
                <View>
                 <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.homeworktitle}</Text>
                 <Text style={{fontSize: 24}}>{item.homeworkdetails}</Text>
                 <Text style={{color: 'red'}}>Hey {this.props.screenProps.loggedinuser}</Text>
                 {this.checkloginuserandposteduser(item.username)}
                </View>
              </TouchableHighlight>
            </View>
          )
        }
        />
      </View>
    )
  }
  else return (
    <Text>Loading</Text>
  )
}

render() {
  return (
    // <ScrollView>
    <View style={viewquestions.container}>
      <Text style={{color: 'white'}}>View all latest questions</Text>
      {/* <Text style={{color: 'red'}}>Hey {this.props.screenProps.loggedinuser}</Text> */}
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