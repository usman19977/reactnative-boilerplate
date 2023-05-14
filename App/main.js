import React from 'react';

import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Navigators from './navigation/Navigators';
function Main() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return <Navigators />;
}

export default Main;
