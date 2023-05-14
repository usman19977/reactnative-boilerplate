import {View, Text} from 'react-native';
import React from 'react';
function AboutView({navigate}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>About Screen</Text>
    </View>
  );
}

export default AboutView;
