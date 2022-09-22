import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import React from 'react'

function MemberResult({ route }) {
    const { user } = route.params;


    return (
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı</Text>
            <Text style={styles.label}>Üye Adı: {user.userName} </Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000',
        margin: 5,
    },
    message: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        textAlign: 'center'
    }
});

export default MemberResult