import {View, Text} from 'react-native';
import React from 'react';
function HomeView({navigate}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeView;
