import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './post.styles';
function PostView({navigate, data}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default PostView;
