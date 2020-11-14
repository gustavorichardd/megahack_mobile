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
      <View
        style={styles.options}
      >
        <TouchableOpacity
          onPress={handleNavigateQuestion}
        >
          <Text>DESAFIOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigateContent}
        >
          <Text>CONTEÚDOS</Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}

