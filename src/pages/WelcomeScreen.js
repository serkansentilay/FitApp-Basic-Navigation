import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

import Button from '../components/Button'

function Welcome({ navigation }) {

  function goToMemberSign() {
    navigation.navigate('MemberSignScreen')
  }




  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Fitness App</Text>
      <Button text="Üye Kaydı Oluşturunuz " onPress={goToMemberSign}></Button>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});