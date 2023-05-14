import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN_ROUTE} from './Constants';
import SplashScreen from '../components/SplashScreen';
import LoginContainer from '../screens/Auth/Login/login.container';
const Stack = createNativeStackNavigator();
function AuthRoutes({loading, data, error}) {
  return (
    <Stack.Navigator>
      {loading === true ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : data == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name={LOGIN_ROUTE}
          component={LoginContainer}
          options={{
            title: 'Login',
          }}
        />
      ) : (
        <></>
      )}
    </Stack.Navigator>
  );
}

export default AuthRoutes;
