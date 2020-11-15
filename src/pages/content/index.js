import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'

export default function Content({ navigation }) {

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
          
          <Text style={styles.contentTitle}>Esse é o primeiro conteúdo</Text>
          
          <ScrollView>
            <Text style={styles.contentText}>Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência. </Text>
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