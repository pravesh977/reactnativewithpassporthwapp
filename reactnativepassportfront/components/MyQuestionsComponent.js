import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class MyQuestionsComponent extends React.Component {
    render() {
        return (
          <View style={myquestions.container}>
            <Text>List of My asked questions</Text>
            <Icon name="thumbs-o-up">
            </Icon>
            <Text>HEYEYEYE</Text>
            <Icon
          name={'thumbs-o-up'}
          size={26}
          style={{ color: 'red' }}
        />
          </View>
        );
      }
}

const myquestions = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyQuestionsComponent;