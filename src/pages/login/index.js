import React, { useState } from 'react';
import { View, Text, Alert, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
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

      <ImageBackground
        source={require('../../../assets/03.png')}
        style={styles.background}
      >


          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/01.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>


        <View >
          <TextInput
            placeholder="USERNAME"
            value={login}
            onChangeText={setLogin}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize="none"
            style={styles.inputUser}
          />
        </View>
        <View >
          <TextInput
            placeholder="PASSWORD"
            value={password}
            onChangeText={setPassword}
            textContentType='password'
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.inputUser}
          />
        </View>
        <View >
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.questionText} >LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity>
            <Text style={styles.questionAsk}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.Ct2}>
            <Image
              source={require('../../../assets/LOGO-TRAÇO-V2.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>


      </ImageBackground>
    </View>
  );
}

