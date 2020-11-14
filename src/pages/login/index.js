import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import api from '../../services/api'


export default function Login({ navigation }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function handleConfirm() {
    navigation.navigate('Main')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="USERNAME"
        value={login}
        onChange={setLogin}
      />
      <TextInput
        placeholder="PASSWORD"
        value={password}
        onChange={setPassword}
      />
      <TouchableOpacity onPress={handleConfirm}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    </View>
  );
}

