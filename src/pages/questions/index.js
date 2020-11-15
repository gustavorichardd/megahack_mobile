import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import RadioButtonRN from 'radio-buttons-react-native';

import api from '../../services/api'
import styles from './styles'

export default function Question({ navigation }) {
  
  const [questions, setQuestions] = useState({})

  async function loadUserQuestions() {
    const valor = await api.get('/questions', {
      params: {
        cpf
      }
    })

    console.log(valor.data)

    //setQuestions(valor.data)
  }
  useEffect(() => {
    loadUserQuestions()
  }, [])

  const data = [
    {
      label: 'Argentina e Brasil'
    },
    {
      label: 'Argentina e Paraguay'
    },
    {
      label: 'Brasil e Paraguay'
    },
    {
      label: 'Brasil e Uruguay'
    }
  ];
  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={require('../../../assets/03.png')}
        style={styles.background}
      >
        <View style={styles.header} >
          <View style={styles.mapContainer}>
            <Image
              source={require('../../../assets/norte-BRANCO.png')}
              style={styles.brasilMap}
              resizeMode='contain'
            />
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/LOGO-V3.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>

          <View style={styles.headerTitleArea}>
            <Text style={styles.headerTitleAreaText}>DESAFIO!</Text>
          </View>
        </View>

        <View style={styles.contentArea} >
          <View style={styles.questionTitle}>
            <Text style={styles.questionTitleText}>A Usina de Itaipu é uma Usina Binacional, ou seja, ela dividida por dois países. Quais países que dividem essa usina?</Text>
          </View>
          <View style={styles.questionOptions}>
            <RadioButtonRN
              circleSize={20}
              data={data}
              selectedBtn={() => { }}
              deactiveColor='#0c354c'
              activeColor='#52bcc1'
              boxActiveBgColor='#52bcc1'
              boxDeactiveBgColor='#fff'
              style={styles.radioButton}
            />
          </View>
        </View>



        <View style={styles.questionArea}>
          <TouchableOpacity
            onPress={() => { }}
            style={styles.question}
          >
            <Text style={styles.questionText}>RESPONDER</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    </View>
  )

}