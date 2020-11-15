import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import styles from './styles'


export default function Main({ navigation }) {
  async function handleNavigateContent() {
    navigation.navigate('Content')
  }

  async function handleNavigateQuestion() {
    navigation.navigate('Question')
  }



  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={require('../../../assets/TELAS.png')}
        style={styles.background}
      >


          <View style={styles.mapContainer}>
            <Image
              source={require('../../../assets/LOGO-V1.png')}
              style={styles.brasilMap}
              resizeMode='contain'
            />
          </View>


          <View style={styles.questionTitle}>
            <Text style={styles.questionTitleText}>Escolha o conteudo que deseja aprender !</Text>
          </View>

          <View style={styles.mapContainer2}>
            <Image
              source={require('../../../assets/MAPA-V2.png')}
              style={styles.brasilMap}
              resizeMode='contain'
            />
          </View>


          <View style={styles.questionTitle2}>
            <Text style={styles.questionTitleText2}>INVESTIMENTOS EM:</Text>
            <Text style={styles.questionTitleText3}>MINERAÇÃO - TURISMO - AGRONEGÓCIOS - TECNOLOGIA - FINANCEIROS</Text>
          </View>

        <View
          style={styles.cotFor}
        >
          <TouchableOpacity
            onPress={handleNavigateQuestion}
          >
            <Text style={styles.btnInov} >DESAFIOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleNavigateContent}
          >
            <Text style={styles.btnInov2} >CONTEÚDOS</Text>
          </TouchableOpacity>
        </View>


        </ImageBackground>
    </View>
  );
}

