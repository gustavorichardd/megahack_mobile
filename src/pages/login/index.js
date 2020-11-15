import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from '../../services/api'
import styles from './styles'


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
    <View style={styles.container}>

      
      <TextInput
        placeholder="USERNAME"
        value={login}
        onChangeText={setLogin}
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize="none"
        style={styles.inputUser}
      />
      <TextInput
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        textContentType='password'
        secureTextEntry={true}
        autoCapitalize="none"
        style={styles.inputUser}
      />

      <View >
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.questionText} >LOGIN</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.questionAsk}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    </View>
  );
}

