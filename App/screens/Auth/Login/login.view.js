import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, Button} from 'react-native';
import {loginRequest} from '../../../redux/Auth/Actions';

function LoginView() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const signIn = (username, password) => {
    dispatch(
      loginRequest({
        username,
        password,
      }),
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </View>
  );
}

export default LoginView;
