import React from 'react'
import { View, ImageBackground, Text, Linking } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import giveClassesGbImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
  const { goBack } = useNavigation()

  function handleWebSite() {
    Linking.openURL(`http://192.168.10.103:3000/give-classes`)
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={giveClassesGbImage} 
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>

        <TouchableOpacity style={styles.webLinkButton} onPress={handleWebSite}>
          <Text style={styles.webLink}>
            <Feather name="arrow-right" size={18} color="#04d361" />
            Acessar plataforma web
          </Text>
        </TouchableOpacity>
      </ImageBackground>

      <RectButton 
        style={styles.okButton} 
        onPress={() => goBack()}
      >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses