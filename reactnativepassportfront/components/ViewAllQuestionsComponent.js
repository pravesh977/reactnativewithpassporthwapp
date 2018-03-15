import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class ViewAllQuestionsComponent extends React.Component {
    render() {
        return (
          <View style={viewquestions.container}>
            <Text>View all questions and categories</Text>
          </View>
        );
      }
}

const viewquestions = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewAllQuestionsComponent;