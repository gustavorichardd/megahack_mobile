import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from '../../services/api'


export default function Login({ navigation }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  


  async function handleSubmit() {
    const response = await api.post('/login', {
      login,
      password,
    });
    console.log(response)
    if (response.data) {
      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          
        }
      }

      navigation.navigate('Main');
    } else {
      Alert.alert(
        'Usuário ou senha incorretos',
        'Por favor verifique se estão corretos e tente novamente',
        [{ text: 'OK', onPress: () => { } }],
        { cancelable: false },
      );
    }

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="USERNAME"
        value={login}
        onChangeText={setLogin}
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize="none"
      />
      <TextInput
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        textContentType='password'
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    </View>
  );
}

