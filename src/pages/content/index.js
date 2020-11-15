import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'
import api from '../../services/api'

export default function Content({ navigation }) {
  const [content, setContent] = useState({})

  async function loadContent() {
    const valor = await api.get('/contents')

    let min = Math.ceil(0);
    let max = Math.floor(valor.data.length);

    const index = Math.floor(Math.random() * (max - min)) + min

    setContent(valor.data[index])
  }
  useEffect(() => {
    loadContent()
  }, [])


  async function handleChallange() {
    navigation.navigate('Question')
  }

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
            <Text style={styles.headerTitleAreaText}>CONTEÚDO</Text>
          </View>
        </View>

        <SafeAreaView style={styles.contentArea} >

          <Text style={styles.contentTitle}>{content.title}</Text>

          <ScrollView>
            <Text style={styles.contentText}>{content.description}</Text>
          </ScrollView>


        </SafeAreaView>


        <View style={styles.questionArea}>
          <TouchableOpacity
            onPress={handleChallange}
            style={styles.question}
          >
            <Text style={styles.questionText}>DESAFIO</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    </View>
  )

}